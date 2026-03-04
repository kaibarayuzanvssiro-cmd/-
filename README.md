# Neo Fantasy VI Lite

SFC版FF6風の雰囲気を意識した、ドット調の探索＋コマンドバトルのミニゲームです。

## 特徴

- 4:3のピクセル風キャンバス描画
- フィールド移動とランダムエンカウント
- FF6風のATBゲージ付きコマンドバトル
- レベルアップ、魔法、アイテム、逃走コマンド
- セーブポイント（HP/MP全回復）

---

## 重要: まだダウンロードしていない場合

ご指摘のとおり、**ダウンロードしていないならPC内にファイルは存在しません**。
まずはこの6ファイルを同じフォルダに保存してください。

- `README.md`
- `index.html`
- `game.js`
- `style.css`
- `serve.sh`
- `serve.ps1`

### いちばん簡単な保存方法（手動）

1. PC上で新しいフォルダを作る（例: `C:\Users\<あなたの名前>\Desktop\neo-fantasy-vi-lite`）
2. 上の6ファイルをそのフォルダに保存する
3. そのフォルダを開き、ファイルが6個あることを確認する

---

## 1から手順（どの階層で何を打つか）

### A. Windows PowerShell の場合（推奨）

1. PowerShell を開く
2. ゲームを保存したフォルダへ移動

```powershell
Set-Location "C:\Users\<あなたの名前>\Desktop\neo-fantasy-vi-lite"
```

3. ファイル確認

```powershell
Get-ChildItem
```

以下が見えればOKです。

- `README.md`
- `index.html`
- `game.js`
- `style.css`
- `serve.ps1`
- `serve.sh`

4. サーバー起動

```powershell
.\serve.ps1
```

5. ブラウザで開く

- `http://localhost:8000/`

6. 実行ポリシーで止まる場合

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

---

### B. Linux / macOS / Git Bash の場合（推奨）

1. ターミナルを開く
2. ゲームを保存したフォルダへ移動

```bash
cd /path/to/neo-fantasy-vi-lite
```

3. ファイル確認

```bash
ls
```

4. サーバー起動

```bash
./serve.sh
```

5. ブラウザで開く

- `http://localhost:8000/`

---

## うまく表示されないとき

- `http://localhost:8000/` でディレクトリ一覧が出る場合: `http://localhost:8000/index.html` を直接開く
- サーバー起動前に、`README.md` と同じ階層にいるか確認する

## 操作

- 移動: 矢印キー / WASD
- 決定: Enter / Z
- キャンセル: X / Backspace（将来拡張用）
- バトルメニュー: ↑↓
