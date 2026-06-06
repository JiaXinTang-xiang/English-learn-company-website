#!/bin/bash

# TF SSD 网站一键打包脚本
# 使用方法：./package-for-sharing.sh

echo "🚀 开始打包 TF SSD 网站..."
echo ""

# 获取脚本所在目录
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# 步骤 1：构建项目
echo "📦 步骤 1：构建项目..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ 构建失败！"
    exit 1
fi
echo "✅ 构建完成"
echo ""

# 步骤 2：创建打包目录
echo "📁 步骤 2：准备打包文件..."
PACKAGE_DIR="$SCRIPT_DIR/TF-SSD-Website-Package"
rm -rf "$PACKAGE_DIR"
mkdir -p "$PACKAGE_DIR"

# 复制必要文件
cp -r "$SCRIPT_DIR/dist" "$PACKAGE_DIR/"
cp "$SCRIPT_DIR/start-server.sh" "$PACKAGE_DIR/"
cp "$SCRIPT_DIR/start-server.bat" "$PACKAGE_DIR/"

# 设置脚本权限
chmod +x "$PACKAGE_DIR/start-server.sh"

echo "✅ 文件准备完成"
echo ""

# 步骤 3：压缩文件
echo "🗜️ 步骤 3：压缩文件..."
cd "$SCRIPT_DIR/.."
zip -r "TF-SSD-Website.zip" "TF-SSD-Website-Package"
rm -rf "$PACKAGE_DIR"

echo ""
echo "🎉 打包完成！"
echo ""
echo "📦 打包文件：~/桌面/TF-SSD-Website.zip"
echo ""
echo "📧 发送给老师/同学后，他们的使用方法："
echo "   1. 解压 TF-SSD-Website.zip"
echo "   2. 双击 start-server.bat（Windows）或运行 ./start-server.sh（Mac/Linux）"
echo "   3. 打开浏览器访问 http://localhost:8080"
echo ""
echo "祝展示顺利！🎓"
