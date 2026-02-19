#!/usr/bin/env bash
set -euo pipefail

# 1) app.c をコンパイル（ビルド）して実行ファイル app を作る
gcc -Wall -Wextra -Werror app.c -o app

# 2) 実行して、出力内容を変数 output に保存する
output=$(./app)

# 3) 期待どおりの文字列かチェックする
if [ "$output" = "2 + 3 = 5" ]; then
  echo "OK"
else
  echo "NG: unexpected output -> $output"
  exit 1
fi
