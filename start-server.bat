@echo off
chcp 65001 >nul
title TF SSD 网站服务器

echo.
echo 🚀 正在启动 TF SSD 网站服务器...
echo.
echo 📍 网站地址: http://localhost:4173
echo.
echo ⚠️  保持此窗口打开，关闭即停止服务器
echo 💡 按 Ctrl+C 停止服务器
echo.
echo -------------------------------------------
echo.

cd /d "%~dp0"
npm run preview

pause
