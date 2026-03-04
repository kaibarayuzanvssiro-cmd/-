# Neo Fantasy VI Lite

SFC版FF6風の雰囲気を意識した、ドット調の探索＋コマンドバトルのミニゲームです。

## 特徴

- 4:3のピクセル風キャンバス描画
- フィールド移動とランダムエンカウント
- FF6風のATBゲージ付きコマンドバトル
- レベルアップ、魔法、アイテム、逃走コマンド
- セーブポイント（HP/MP全回復）

---

## まず最初に: ファイルをダウンロードする方法

このプロジェクトは以下の6ファイルで動きます。

- `README.md`
- `index.html`
- `game.js`
- `style.css`
- `serve.sh`
- `serve.ps1`

### 方法A（推奨）: GitHub から ZIP でダウンロード

1. このプロジェクトの GitHub ページを開く
2. 緑の **Code** ボタンを押す
3. **Download ZIP** を押す
4. ダウンロードした ZIP を解凍する
5. 解凍したフォルダの中に上記6ファイルがあることを確認する

### 方法B（推奨）: Git でクローン

#### Windows PowerShell

```powershell
git clone <このリポジトリのURL>
Set-Location <クローンしてできたフォルダ>
Get-ChildItem
```

#### Linux / macOS / Git Bash

```bash
git clone <このリポジトリのURL>
cd <クローンしてできたフォルダ>
ls
```

### 方法C（最終手段）: 6ファイルを手動保存

1. PC上で新しいフォルダを作る
2. `README.md`, `index.html`, `game.js`, `style.css`, `serve.sh`, `serve.ps1` を同じフォルダに保存する
3. ファイル名のスペルが一致しているか確認する

---

## 1から手順（どの階層で何を打つか）

### A. Windows PowerShell の場合（推奨）

1. PowerShell を開く
2. ダウンロード（または解凍）したフォルダへ移動

```powershell
Set-Location "C:\Users\<あなたの名前>\Downloads\neo-fantasy-vi-lite"
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
2. ダウンロード（または解凍）したフォルダへ移動

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

---

## GitHub 上で動かす（GitHub Pages）

このリポジトリには GitHub Pages 自動デプロイ設定を入れてあります。

### 事前条件

- リポジトリを GitHub に push している
- デフォルトブランチが `main`（この設定は `main` への push でデプロイ）

### 手順

1. GitHub で対象リポジトリを開く
2. **Settings** → **Pages** を開く
3. **Build and deployment** の **Source** を **GitHub Actions** にする
4. `main` ブランチへ push する
5. **Actions** タブで `Deploy static site to GitHub Pages` が成功するのを確認
6. 表示された URL（`https://<ユーザー名>.github.io/<リポジトリ名>/`）を開く

### 補足

- 初回公開は数分かかることがあります
- 404 になる場合は、Actions のデプロイ完了後に再読み込みしてください
