# Neo Fantasy VI Lite

SFC版FF6風の雰囲気を意識した、ドット調の探索＋コマンドバトルのミニゲームです。

## 特徴

- 4:3のピクセル風キャンバス描画
- フィールド移動とランダムエンカウント
- FF6風のATBゲージ付きコマンドバトル
- レベルアップ、魔法、アイテム、逃走コマンド
- セーブポイント（HP/MP全回復）

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

## 4) うまく表示されないとき

- `http://localhost:8000/` でディレクトリ一覧が出る場合: `http://localhost:8000/index.html` を直接開く
- `404` の場合: GitHub Actions のデプロイ完了後に再読み込み
- サーバー起動前に、`README.md` と同じ階層にいるか確認する

## 操作

- 移動: 矢印キー / WASD
- 決定: Enter / Z
- キャンセル: X / Backspace（将来拡張用）
- バトルメニュー: ↑↓
