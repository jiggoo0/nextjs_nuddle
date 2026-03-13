#!/usr/bin/env bash
# scripts/ai-context-sync.sh
# สร้างไฟล์สรุปโปรเจกต์แบบเร่งด่วน สำหรับให้ AI อ่าน (Bot Context Sync)

set -e

OUTPUT_FILE=".gemini/context/AI_FAST_SUMMARY.md"

echo "🚀 [AI CONTEXT SYNC] เริ่มต้นสแกนโครงสร้างหลัก..."

# ล้างไฟล์เดิมถ้ามี
> "$OUTPUT_FILE"

echo "# 🤖 AI FAST PROJECT CONTEXT" >> "$OUTPUT_FILE"
echo "> Generated at: $(date)" >> "$OUTPUT_FILE"
echo "> Purpose: สำหรับให้ AI อ่านภาพรวมโค้ดและโครงสร้างอย่างรวดเร็ว" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# 1. สรุปโครงสร้างไฟล์ (เฉพาะโฟลเดอร์สำคัญ)
echo "## 📂 CORE STRUCTURE" >> "$OUTPUT_FILE"
echo "\`\`\`text" >> "$OUTPUT_FILE"
find . -type d \( -name "node_modules" -o -name ".next" -o -name ".git" -o -name "public" \) -prune -o -print | sort >> "$OUTPUT_FILE"
echo "\`\`\`" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# 2. อ่านไฟล์ Configuration ที่สำคัญ
echo "## ⚙️ CRITICAL CONFIGURATIONS" >> "$OUTPUT_FILE"
for file in package.json next.config.mjs tailwind.config.ts postcss.config.mjs constants/site-config.ts; do
  if [ -f "$file" ]; then
    echo "### File: $file" >> "$OUTPUT_FILE"
    echo "\`\`\`" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo "\`\`\`" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
  fi
done

# 3. อ่านโค้ดหลัก (แสดงเฉพาะ 100 บรรทัดแรกเพื่อความรวดเร็ว)
echo "## 💻 CORE LOGIC (First 100 lines)" >> "$OUTPUT_FILE"
find app components lib hooks -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.css" \) | sort | while read -r file; do
  echo "### File: $file" >> "$OUTPUT_FILE"
  echo "\`\`\`typescript" >> "$OUTPUT_FILE"
  head -n 100 "$file" >> "$OUTPUT_FILE"
  echo "\`\`\`" >> "$OUTPUT_FILE"
  echo "" >> "$OUTPUT_FILE"
done

echo "✅ [DONE] ข้อมูลถูกจัดเก็บที่ $OUTPUT_FILE เรียบร้อยแล้ว"
