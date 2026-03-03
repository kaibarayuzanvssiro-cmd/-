const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const TILE = 32;
const MAP_W = 16;
const MAP_H = 12;

const keys = new Set();
window.addEventListener('keydown', (e) => {
  keys.add(e.key.toLowerCase());
  if (["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});
window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));

const worldMap = [
  '################',
  '#......gg..~~~~#',
  '#..ggg.gg..~..~#',
  '#..g..g....~..~#',
  '#...........~~.#',
  '#..^^^^......~.#',
  '#..^..^....gg..#',
  '#..^^^^....gg..#',
  '#......#####...#',
  '#......#...#...#',
  '#..S...#...#...#',
  '################'
];

const hero = {
  name: 'ルシア',
  x: 2,
  y: 2,
  px: 2 * TILE,
  py: 2 * TILE,
  hp: 220,
  maxHp: 220,
  mp: 80,
  maxMp: 80,
  level: 8,
  exp: 0,
  nextExp: 120,
  attack: 32,
  magic: 28,
  potions: 5,
};

const game = {
  state: 'field',
  message: '帝国軍の気配がする…',
  encounterMeter: 0,
  battle: null,
  frame: 0,
  inputLock: 0,
};

const enemies = [
  { name: 'マグローダー', maxHp: 120, attack: 18, exp: 36, color: '#9f78ff' },
  { name: 'ソルジャー', maxHp: 90, attack: 20, exp: 40, color: '#c86868' },
  { name: 'ベクタハウンド', maxHp: 140, attack: 22, exp: 48, color: '#59b77d' },
];

function pressed(...k) {
  return k.some((x) => keys.has(x));
}

function isWalkable(nx, ny) {
  const row = worldMap[ny];
  if (!row) return false;
  const tile = row[nx];
  return tile && tile !== '#';
}

function tryMove(dx, dy) {
  if (game.inputLock > 0) return;
  const nx = hero.x + dx;
  const ny = hero.y + dy;
  if (isWalkable(nx, ny)) {
    hero.x = nx;
    hero.y = ny;
    game.inputLock = 8;
    stepEncounter();
    if (worldMap[ny][nx] === 'S') {
      game.message = 'セーブポイント：英気が満ちた。HP/MP全回復！';
      hero.hp = hero.maxHp;
      hero.mp = hero.maxMp;
    }
  }
}

function stepEncounter() {
  const tile = worldMap[hero.y][hero.x];
  const wildness = tile === 'g' ? 22 : tile === '^' ? 12 : 6;
  game.encounterMeter += wildness + Math.random() * 8;
  if (game.encounterMeter >= 100) {
    game.encounterMeter = 0;
    startBattle();
  }
}

function startBattle() {
  const template = enemies[Math.floor(Math.random() * enemies.length)];
  game.state = 'battle';
  game.battle = {
    enemy: {
      ...template,
      hp: template.maxHp,
    },
    menuIndex: 0,
    phase: 'menu',
    queue: ['敵が現れた！'],
    atbHero: 100,
    atbEnemy: 0,
  };
}

function updateField() {
  if (game.inputLock > 0) game.inputLock--;

  if (pressed('arrowup', 'w')) tryMove(0, -1);
  else if (pressed('arrowdown', 's')) tryMove(0, 1);
  else if (pressed('arrowleft', 'a')) tryMove(-1, 0);
  else if (pressed('arrowright', 'd')) tryMove(1, 0);

  hero.px += (hero.x * TILE - hero.px) * 0.35;
  hero.py += (hero.y * TILE - hero.py) * 0.35;

  if (Math.random() < 0.005) {
    const hints = [
      'ナルシェ方面は雪原地帯らしい。',
      '魔導の光が空を裂いた。',
      '仲間を探して南へ向かおう。',
    ];
    game.message = hints[Math.floor(Math.random() * hints.length)];
  }
}

function battleLog(msg) {
  game.battle.queue.unshift(msg);
  game.battle.queue = game.battle.queue.slice(0, 4);
}

function updateBattle() {
  const b = game.battle;
  if (!b) return;

  b.atbHero = Math.min(100, b.atbHero + 1.8);
  b.atbEnemy = Math.min(100, b.atbEnemy + 1.2);

  if (b.phase === 'menu') {
    if (pressed('arrowup', 'w')) {
      b.menuIndex = (b.menuIndex + 3) % 4;
      game.inputLock = 8;
    } else if (pressed('arrowdown', 's')) {
      b.menuIndex = (b.menuIndex + 1) % 4;
      game.inputLock = 8;
    }

    if (pressed('enter', 'z') && b.atbHero >= 100) {
      const action = ['たたかう', 'まほう', 'アイテム', 'にげる'][b.menuIndex];
      resolveHeroAction(action);
      b.atbHero = 0;
      game.inputLock = 12;
    }
  }

  if (b.atbEnemy >= 100 && b.enemy.hp > 0) {
    const dmg = Math.max(8, b.enemy.attack + Math.floor(Math.random() * 12) - 6);
    hero.hp = Math.max(0, hero.hp - dmg);
    battleLog(`${b.enemy.name}の攻撃！ ${dmg}ダメージ`);
    b.atbEnemy = 0;
    if (hero.hp <= 0) {
      battleLog('ルシアは倒れた…しかし不思議な力で踏みとどまった！');
      hero.hp = Math.floor(hero.maxHp * 0.35);
      hero.mp = Math.floor(hero.maxMp * 0.35);
      endBattle(false);
    }
  }

  if (game.inputLock > 0) game.inputLock--;
}

function resolveHeroAction(action) {
  const b = game.battle;
  if (!b) return;

  if (action === 'たたかう') {
    const dmg = Math.max(14, hero.attack + Math.floor(Math.random() * 18) - 5);
    b.enemy.hp = Math.max(0, b.enemy.hp - dmg);
    battleLog(`ルシアの攻撃！ ${dmg}ダメージ`);
  } else if (action === 'まほう') {
    if (hero.mp < 12) {
      battleLog('MPが足りない！');
      return;
    }
    hero.mp -= 12;
    const dmg = Math.max(20, hero.magic + 26 + Math.floor(Math.random() * 16));
    b.enemy.hp = Math.max(0, b.enemy.hp - dmg);
    battleLog(`ファイラ！ ${dmg}ダメージ`);
  } else if (action === 'アイテム') {
    if (hero.potions <= 0) {
      battleLog('ポーションがない！');
      return;
    }
    hero.potions -= 1;
    const heal = 80;
    hero.hp = Math.min(hero.maxHp, hero.hp + heal);
    battleLog(`ポーション使用。HPが${heal}回復`);
  } else if (action === 'にげる') {
    if (Math.random() < 0.6) {
      battleLog('うまく逃げ切った！');
      endBattle(false);
      return;
    }
    battleLog('逃げられない！');
  }

  if (b.enemy.hp <= 0) {
    battleLog(`${b.enemy.name}を倒した！`);
    hero.exp += b.enemy.exp;
    while (hero.exp >= hero.nextExp) {
      hero.exp -= hero.nextExp;
      hero.level += 1;
      hero.nextExp = Math.floor(hero.nextExp * 1.28);
      hero.maxHp += 28;
      hero.maxMp += 10;
      hero.attack += 4;
      hero.magic += 3;
      hero.hp = hero.maxHp;
      hero.mp = hero.maxMp;
      battleLog(`レベルアップ！ Lv.${hero.level}になった`);
    }
    endBattle(true);
  }
}

function endBattle(victory) {
  game.state = 'field';
  game.message = victory
    ? `戦闘勝利！ Lv.${hero.level} HP:${hero.hp}/${hero.maxHp}`
    : '戦闘終了。態勢を立て直した。';
  game.battle = null;
}

function drawMap() {
  for (let y = 0; y < MAP_H; y++) {
    for (let x = 0; x < MAP_W; x++) {
      const t = worldMap[y][x];
      let color = '#5f8864';
      if (t === '#') color = '#3a3a50';
      if (t === 'g') color = '#5ca05b';
      if (t === '^') color = '#6d7f57';
      if (t === '~') color = '#4476b3';
      if (t === 'S') color = '#d2c06f';

      ctx.fillStyle = color;
      ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
      ctx.strokeStyle = '#0003';
      ctx.strokeRect(x * TILE, y * TILE, TILE, TILE);
    }
  }

  const pulse = 4 + Math.sin(game.frame / 10) * 2;
  ctx.fillStyle = '#ffe39f';
  ctx.fillRect(hero.px + 10, hero.py + 6 + pulse * 0.08, 12, 20);
  ctx.fillStyle = '#8b1d34';
  ctx.fillRect(hero.px + 8, hero.py + 22, 16, 8);
}

function drawWindow(x, y, w, h) {
  ctx.fillStyle = '#11152ddd';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = '#c9ceff';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, w, h);
}

function drawFieldUI() {
  drawWindow(8, 8, 244, 96);
  ctx.fillStyle = '#fff';
  ctx.font = '16px monospace';
  ctx.fillText(`${hero.name}  Lv.${hero.level}`, 20, 30);
  ctx.fillText(`HP ${hero.hp}/${hero.maxHp}`, 20, 52);
  ctx.fillText(`MP ${hero.mp}/${hero.maxMp}`, 20, 74);
  ctx.fillText(`POTION ${hero.potions}`, 20, 96);

  drawWindow(8, 318, 496, 58);
  ctx.fillStyle = '#f6f6ff';
  ctx.fillText(game.message, 18, 353);
}

function drawBattle() {
  const b = game.battle;
  if (!b) return;

  ctx.fillStyle = '#1a1f49';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 60; i++) {
    ctx.fillStyle = `rgba(255,255,255,${0.08 + (i % 3) * 0.04})`;
    ctx.fillRect((i * 71 + game.frame * 0.7) % 530, (i * 47) % 384, 2, 2);
  }

  ctx.fillStyle = '#f5d28f';
  ctx.fillRect(84, 208, 36, 56);
  ctx.fillStyle = '#8b1d34';
  ctx.fillRect(80, 258, 44, 12);

  ctx.fillStyle = b.enemy.color;
  ctx.fillRect(344, 144 + Math.sin(game.frame / 12) * 3, 72, 72);
  ctx.fillStyle = '#0006';
  ctx.fillRect(334, 226, 94, 10);

  drawWindow(12, 12, 230, 74);
  ctx.fillStyle = '#fff';
  ctx.font = '16px monospace';
  ctx.fillText(`${hero.name} Lv.${hero.level}`, 24, 36);
  ctx.fillText(`HP ${hero.hp}/${hero.maxHp}`, 24, 56);
  ctx.fillText(`MP ${hero.mp}/${hero.maxMp}`, 24, 76);

  drawWindow(270, 12, 230, 74);
  ctx.fillText(`${b.enemy.name}`, 282, 36);
  ctx.fillText(`HP ${Math.max(0, b.enemy.hp)}/${b.enemy.maxHp}`, 282, 56);

  drawWindow(12, 254, 220, 122);
  const cmds = ['たたかう', 'まほう', 'アイテム', 'にげる'];
  cmds.forEach((c, i) => {
    ctx.fillStyle = i === b.menuIndex ? '#ffe083' : '#f3f3ff';
    ctx.fillText(`${i === b.menuIndex ? '▶' : ' '} ${c}`, 24, 280 + i * 24);
  });

  drawWindow(240, 254, 260, 122);
  b.queue.forEach((msg, i) => {
    ctx.fillStyle = '#f3f3ff';
    ctx.fillText(msg, 252, 280 + i * 24);
  });

  drawAtb(18, 228, b.atbHero, '#83e1ff', 'ATB');
  drawAtb(282, 78, b.atbEnemy, '#ff8ca3', 'ENEMY');
}

function drawAtb(x, y, val, color, label) {
  ctx.fillStyle = '#111';
  ctx.fillRect(x, y, 120, 10);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, (120 * val) / 100, 10);
  ctx.strokeStyle = '#ccd0ff';
  ctx.strokeRect(x, y, 120, 10);
  ctx.fillStyle = '#fff';
  ctx.font = '12px monospace';
  ctx.fillText(label, x + 126, y + 9);
}

function loop() {
  game.frame++;

  if (game.state === 'field') {
    updateField();
    drawMap();
    drawFieldUI();
  } else {
    updateBattle();
    drawBattle();
  }

  requestAnimationFrame(loop);
}

loop();
