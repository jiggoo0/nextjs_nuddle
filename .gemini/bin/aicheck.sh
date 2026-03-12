#!/bin/bash
# 🔍 AICHECK v1.0 (Portable Edition)
# ---------------------------------------------------------
set -e

echo "🚀 [AICHECK] เริ่มต้นกระบวนการตรวจสอบคุณภาพโค้ดระดับมาตรฐาน..."

# ตรวจหาเครื่องมือที่ใช้ (Package Manager)
if [ -f "pnpm-lock.yaml" ]; then
  PM="pnpm"
elif [ -f "yarn.lock" ]; then
  PM="yarn"
else
  PM="npm"
fi

echo "📦 Detected Package Manager: $PM"

# 1. Linting
echo "🔍 1. Running Linter..."
$PM run lint || echo "⚠️  Lint check failed (Proceeding...)"

# 2. Type Checking
echo "🏗️ 2. Running Type Check..."
if grep -q "check" package.json; then
  $PM run check || echo "⚠️  Type check failed (Proceeding...)"
else
  echo "⏭️  Skipping Type Check (No 'check' script found)"
fi

# 3. Build Test
echo "📦 3. Testing Production Build..."
if grep -q "build" package.json; then
  $PM run build || { echo "❌ Build failed"; exit 1; }
else
  echo "⏭️  Skipping Build Test (No 'build' script found)"
fi

echo "✅ [AICHECK COMPLETE] สภาพแวดล้อมพร้อมสำหรับการพัฒนา"
