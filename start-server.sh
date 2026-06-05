#!/bin/bash

# TF SSD 网站离线启动脚本
# 使用方法：双击运行或在终端执行 ./start-server.sh

echo "🚀 正在启动 TF SSD 网站服务器..."
echo ""
echo "📍 网站地址: http://localhost:4173"
echo ""
echo "⚠️  保持此窗口打开，关闭即停止服务器"
echo "💡 按 Ctrl+C 停止服务器"
echo ""
echo "-------------------------------------------"
echo ""

# 进入项目目录
cd "$(dirname "$0")"

# 启动预览服务器
npm run preview
