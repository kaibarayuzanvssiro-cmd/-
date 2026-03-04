#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT="${1:-8000}"

cd "$SCRIPT_DIR"
echo "Serving Neo Fantasy VI Lite from: $SCRIPT_DIR"
echo "Open: http://localhost:${PORT}/"
python3 -m http.server "$PORT" --bind 0.0.0.0 --directory "$SCRIPT_DIR"
