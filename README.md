# Neo Fantasy VI Lite

SFC版FF6風の雰囲気を意識した、ドット調の探索＋コマンドバトルのミニゲームです。

## 特徴

- 4:3のピクセル風キャンバス描画
- フィールド移動とランダムエンカウント
- FF6風のATBゲージ付きコマンドバトル
- レベルアップ、魔法、アイテム、逃走コマンド
- セーブポイント（HP/MP全回復）

---

## PCにダウンロードする方法（最短）

結論：このチャット画面からPCへ直接保存はできません。**GitHubに保存した後にダウンロード**します。

### 手順（ZIPでダウンロード）

1. ブラウザで GitHub の対象リポジトリページを開く
2. 緑の **`<> Code`** ボタンをクリック
3. **`Download ZIP`** をクリック
4. ダウンロードしたZIPを右クリックして **「すべて展開」**
5. 展開したフォルダに以下があることを確認
   - `README.md`
   - `index.html`
   - `game.js`
   - `style.css`
   - `serve.sh`
   - `serve.ps1`
   - `.github/workflows/pages.yml`

### まだGitHubに上がっていない場合

先にこのREADME内の「**最短でGitHubに保存する（コピペ用）**」の手順で `git push` してください。

---

## 0) これらのファイルをGitHubに持っていく方法

ここでは、次のファイルを GitHub リポジトリに入れる方法を説明します。

- `README.md`
- `index.html`
- `game.js`
- `style.css`
- `serve.sh`
- `serve.ps1`
- `.github/workflows/pages.yml`

### 方法A（画面操作だけでOK）: GitHubサイトからアップロード

1. GitHub にログイン
2. 右上の **`+`** ボタンをクリック → **`New repository`** をクリック
3. `Repository name` を入力（例: `neo-fantasy-vi-lite`）
4. **`Create repository`** をクリック
5. 作成直後のページで **`uploading an existing file`** をクリック
6. エクスプローラーから上記ファイルをドラッグ&ドロップ
7. ページ下の **Commit changes** セクションで
   - Commit message: `Add Neo Fantasy VI Lite files`
8. **`Commit changes`** ボタンをクリック
9. アップロード後、ファイル一覧に `index.html` などが表示されることを確認

> `.github/workflows/pages.yml` を入れるには、`.github/workflows/` フォルダ構成のままアップロードしてください。

### 方法B（おすすめ）: Gitコマンドでpush

#### 事前準備

1. GitHubで空のリポジトリを作成（方法Aの 1〜4 と同じ）
2. ローカルで、このファイル群が入っているフォルダを開く

#### Windows PowerShell

```powershell
Set-Location "C:\Users\<あなたの名前>\Downloads\<このプロジェクトフォルダ>"
git init
git add .
git commit -m "Initial commit: Neo Fantasy VI Lite"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

#### Linux / macOS / Git Bash

```bash
cd /path/to/<このプロジェクトフォルダ>
git init
git add .
git commit -m "Initial commit: Neo Fantasy VI Lite"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

push 後に GitHub のリポジトリトップを開いて、ファイル一覧が見えれば完了です。

---

## 1) ファイルを手元に用意する（クリック手順つき）

### 方法A（いちばん簡単）: GitHubのZIPをダウンロード

1. ブラウザで、このプロジェクトの **GitHubリポジトリのトップページ** を開く
2. ファイル一覧の少し上にある、緑色の **`<> Code`** ボタンをクリック
3. 開いたメニューの **`Download ZIP`** をクリック
4. ZIPファイルのダウンロード完了後、エクスプローラーでZIPを右クリック
5. **「すべて展開...」**（または「Extract All...」）をクリック
6. 展開先フォルダを選んで **「展開」** をクリック
7. 展開後のフォルダを開き、次のファイルがあることを確認
   - `README.md`
   - `index.html`
   - `game.js`
   - `style.css`
   - `serve.sh`
   - `serve.ps1`

### 方法B: Gitで取得（Gitを使える人向け）

#### Windows PowerShell

1. スタートメニューから **PowerShell** を開く
2. 保存したい場所へ移動（例: Downloads）

```powershell
Set-Location "$HOME\Downloads"
```

3. クローン

```powershell
git clone <このリポジトリのURL>
```

4. 作成されたフォルダへ移動

```powershell
Set-Location <クローンでできたフォルダ名>
```

5. ファイル確認

```powershell
Get-ChildItem
```

#### Linux / macOS / Git Bash

1. ターミナルを開く
2. 保存したい場所へ移動

```bash
cd ~/Downloads
```

3. クローン

```bash
git clone <このリポジトリのURL>
```

4. 作成されたフォルダへ移動

```bash
cd <クローンでできたフォルダ名>
```

5. ファイル確認

```bash
ls
```

---

## 2) ローカルでゲームを起動する（クリック手順つき）

### A. Windows PowerShell

1. スタートメニューから **PowerShell** を開く
2. さきほど展開/クローンしたフォルダへ移動

```powershell
Set-Location "C:\Users\<あなたの名前>\Downloads\<展開したフォルダ名>"
```

3. ファイル一覧を確認

```powershell
Get-ChildItem
```

4. サーバー起動

```powershell
.\serve.ps1
```

5. ブラウザを開いてアドレスバーに `http://localhost:8000/` を入力して Enter

6. もし `serve.ps1` が実行ポリシーで止まる場合、PowerShellで次を実行

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

### B. Linux / macOS / Git Bash

1. ターミナルを開く
2. さきほど展開/クローンしたフォルダへ移動

```bash
cd /path/to/<展開したフォルダ>
```

3. ファイル一覧を確認

```bash
ls
```

4. サーバー起動

```bash
./serve.sh
```

5. ブラウザを開いて `http://localhost:8000/`

---

## 3) GitHub Pagesで公開する（ページとボタンを指定）

> ここからは「GitHub上で動かす」手順です。

1. GitHubで対象リポジトリのトップページを開く
2. 画面上部のタブで **`Settings`** をクリック
3. 左サイドバーの **`Pages`** をクリック
4. **Build and deployment** セクションを確認
5. **Source** のプルダウンをクリック
6. **`GitHub Actions`** を選択
7. 画面上部のタブで **`Actions`** をクリック
8. 左側のワークフロー一覧から **`Deploy static site to GitHub Pages`** をクリック
9. まだ実行履歴がない場合は、右側の **`Run workflow`** ボタンをクリック
10. Branch が `main` になっていることを確認して **`Run workflow`** を押す
11. 実行が終わるまで待つ（緑のチェックになれば成功）
12. もう一度 **`Settings` → `Pages`** を開く
13. 表示された公開URL（`https://<ユーザー名>.github.io/<リポジトリ名>/`）をクリック
14. ゲーム画面が表示されれば完了

---


### 3-1) 「8. 左側のワークフロー一覧からクリック」ができない場合

以下を上から順番に確認してください。

1. まず、リポジトリの上部タブ **`Actions`** を開く
2. 画面に **`I understand my workflows, go ahead and enable them`** ボタンが出ていたらクリック
3. 右上の **`...`**（または Settings）から **Actions permissions** を開く
4. **Allow all actions and reusable workflows** を選択して **Save**
5. 上部タブ **`Code`** に戻り、`.github/workflows/pages.yml` が存在するか確認
6. `pages.yml` が無い場合は、このファイルを含む最新コミットを `main` に push する
7. 再度 **`Actions`** タブを開く
8. 左のフィルタ検索に `Deploy static site to GitHub Pages` と入力
9. 表示されたワークフロー名をクリック

#### それでも表示されないとき

- ブランチが `main` ではない場合: `main` にマージ/プッシュしてから再確認
- Forkしたリポジトリの場合: リポジトリの **Settings → Actions → General** で Actions を有効化
- 直接URLで開く: `https://github.com/<ユーザー名>/<リポジトリ名>/actions/workflows/pages.yml`

## 4) うまく表示されないとき

- `http://localhost:8000/` でディレクトリ一覧が出る場合: `http://localhost:8000/index.html` を直接開く
- `404` の場合: GitHub Actions のデプロイ完了後に再読み込み
- サーバー起動前に、`README.md` と同じ階層にいるか確認する

## 操作

- 移動: 矢印キー / WASD
- 決定: Enter / Z
- キャンセル: X / Backspace（将来拡張用）
- バトルメニュー: ↑↓

---

## 最短でGitHubに保存する（コピペ用）

> 「とにかく今すぐGitHubに上げたい」方向けです。

### 1. GitHubで空リポジトリを作る

1. GitHub右上の **`+`** → **`New repository`**
2. Repository name を入力（例: `neo-fantasy-vi-lite`）
3. **`Create repository`** をクリック

### 2. そのページのURLをコピー

作成後ページに出るURL（例）:

- `https://github.com/YOUR_USERNAME/neo-fantasy-vi-lite.git`

### 3. 以下を実行（PowerShell と Bash でコマンドが違います）

#### Windows PowerShell（そのままコピペ可）

```powershell
Set-Location "C:\Users\<あなたの名前>\Downloads\<このプロジェクトフォルダ>"
$repoUrl = "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git"
git branch -M main
git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
  git remote set-url origin $repoUrl
} else {
  git remote add origin $repoUrl
}
git push -u origin main
```

#### Linux / macOS / Git Bash

```bash
cd /path/to/this-project
REPO_URL="https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git"
git branch -M main
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi
git push -u origin main
```

### 4. よくあるエラー（今回のエラー）

- `演算子 '<' は、今後の使用のために予約されています。`
  - 原因: `git remote add origin <URL>` のように `<>` を含めて実行したため
  - 対処: `<>` は書かず、URLをそのまま書く（例: `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git`）
- `'||' は、このバージョンでは有効なステートメント区切りではありません。`
  - 原因: PowerShell では `||` が使えない
  - 対処: 上の PowerShell 用コマンドをそのまま使う

成功したら、GitHubのリポジトリページを再読み込みするとファイル一覧が表示されます。
