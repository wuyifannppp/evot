@echo off
rem evot - Windows launcher for the Evot CLI.
rem The npm `bin` shim (cli/bin/evot) is a POSIX script; Windows users get
rem this .cmd so `evot` resolves without a Git Bash on PATH.
setlocal
set "BUN_BIN=%USERPROFILE%\.bun\bin"
set "SCRIPT_DIR=%~dp0"
set "CLI_DIR=%SCRIPT_DIR%.."

if exist "%BUN_BIN%\bun.exe" (
  "%BUN_BIN%\bun.exe" run "%CLI_DIR%\src\index.ts" %*
) else (
  bun run "%CLI_DIR%\src\index.ts" %*
)
