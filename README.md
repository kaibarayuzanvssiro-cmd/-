# Neo Fantasy VI Lite

SFC版FF6風の雰囲気を意識した、ドット調の探索＋コマンドバトルのミニゲームです。

## 特徴

- 4:3のピクセル風キャンバス描画
- フィールド移動とランダムエンカウント
- FF6風のATBゲージ付きコマンドバトル
- レベルアップ、魔法、アイテム、逃走コマンド
- セーブポイント（HP/MP全回復）

---

## 1から手順（どの階層で何を打つか）

以下の手順を**そのまま順番どおり**実行してください。

### A. Windows PowerShell の場合（推奨）

`C:\workspace\-` は環境依存で存在しないことがあるため、**まずプロジェクトが置いてある実在パスを確認**してから移動します。

1. PowerShell を開く
2. いまいる場所を確認

```powershell
Get-Location
```

3. `README.md` があるフォルダを探す（例: `C:\Users\<ユーザー名>\Downloads\-` など）

```powershell
Get-ChildItem -Path C:\ -Filter README.md -Recurse -ErrorAction SilentlyContinue
```

4. 見つかったフォルダへ移動（`README.md` があるディレクトリを指定）

```powershell
Set-Location "<README.md があるフォルダのフルパス>"
```

例:

```powershell
Set-Location "C:\Users\yourname\Downloads\-"
```

5. ファイルがあることを確認する（README.md, index.html, game.js など）

```powershell
Get-ChildItem
```

6. サーバーを起動する

```powershell
.\serve.ps1
```

7. ブラウザで開く

- `http://localhost:8000/`

8. もし実行ポリシーで止まる場合は、こちらで起動する

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

1. `README.md` があるフォルダへ移動

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
