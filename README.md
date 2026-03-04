# Neo Fantasy VI Lite

SFC版FF6風の雰囲気を意識した、ドット調の探索＋コマンドバトルのミニゲームです。

## 特徴

- 4:3のピクセル風キャンバス描画
- フィールド移動とランダムエンカウント
- FF6風のATBゲージ付きコマンドバトル
- レベルアップ、魔法、アイテム、逃走コマンド
- セーブポイント（HP/MP全回復）

---


## この環境で作成されたファイルはどこにある？

このチャット実行環境では、プロジェクト一式は次のフォルダにあります。

- `/workspace/-`

含まれている主なファイル:

- `README.md`
- `index.html`
- `game.js`
- `style.css`
- `serve.sh`
- `serve.ps1`

確認コマンド（この環境のターミナル）:

```bash
pwd
ls -la /workspace/-
```

Windows の PowerShell で「自分のPC内の場所」を探したい場合:

```powershell
Get-ChildItem -Path C:\ -Filter "index.html" -Recurse -ErrorAction SilentlyContinue
```

> 補足: この環境（`/workspace/-`）はクラウド側の作業ディレクトリです。ローカルPCへ自動でダウンロードはされません。

---

## 1から手順（どの階層で何を打つか）

以下の手順を**そのまま順番どおり**実行してください。

### A. Windows PowerShell の場合（推奨）

`C:\workspace\-` は環境依存で存在しないことがあるため、まず「このゲームのファイルがあるフォルダ」を見つけます。

#### A-1. まずフォルダを見つける（いちばん簡単）

1. エクスプローラーを開く
2. 検索ボックスに **`serve.ps1`** と入力して検索
3. 見つかった `serve.ps1` を右クリック
4. 「**ファイルの場所を開く**」を押す
5. 開いたフォルダのアドレスバーをクリックし、表示されたフルパスをコピー
   - 例: `C:\Users\yourname\Downloads\-`

#### A-2. PowerShell でそのフォルダへ移動

```powershell
Set-Location "<コピーしたフルパス>"
```

例:

```powershell
Set-Location "C:\Users\yourname\Downloads\-"
```

#### A-3. その場所が正しいか確認

```powershell
Get-ChildItem
```

この一覧に、最低でも次のファイルが見えればOKです。

- `README.md`
- `index.html`
- `game.js`
- `style.css`
- `serve.ps1`
- `serve.sh`

#### A-4. サーバー起動

```powershell
.\serve.ps1
```

#### A-5. ブラウザで開く

- `http://localhost:8000/`

#### A-6. 実行ポリシーで止まるとき

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

---

### B. Linux / macOS / Git Bash の場合（推奨）

1. ターミナルを開く
2. このプロジェクトのフォルダへ移動する

```bash
cd /workspace/-
```

3. ファイルがあることを確認する

```bash
ls
```

4. サーバーを起動する

```bash
./serve.sh
```

5. ブラウザで開く

- `http://localhost:8000/`

---

### C. `serve.sh` / `serve.ps1` を使わない手動起動

#### Windows PowerShell

1. 上の「A-1」「A-2」で見つけたフォルダへ移動

```powershell
Set-Location "<README.md があるフォルダのフルパス>"
```

2. サーバー起動

```powershell
py -m http.server 8000
```

3. ブラウザで開く

- `http://localhost:8000/`

#### Linux / macOS / Git Bash

1. プロジェクトへ移動

```bash
cd /workspace/-
```

2. サーバー起動

```bash
python3 -m http.server 8000
```

3. ブラウザで開く

- `http://localhost:8000/`

---

## うまく表示されないときの確認

- `http://localhost:8000/` でディレクトリ一覧が出る場合は、`http://localhost:8000/index.html` を直接開く
- サーバー起動前に、必ず `README.md` と同じ階層へ移動しているか確認する

## 操作

- 移動: 矢印キー / WASD
- 決定: Enter / Z
- キャンセル: X / Backspace（将来拡張用）
- バトルメニュー: ↑↓
