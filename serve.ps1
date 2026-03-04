param(
  [int]$Port = 8000
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

Write-Host "Serving Neo Fantasy VI Lite from: $ScriptDir"
Write-Host "Open: http://localhost:$Port/"

if (Get-Command py -ErrorAction SilentlyContinue) {
  py -m http.server $Port --bind 0.0.0.0 --directory "$ScriptDir"
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server $Port --bind 0.0.0.0 --directory "$ScriptDir"
} else {
  Write-Error "Python launcher (py) or python が見つかりません。Python をインストールしてください。"
  exit 1
}
