# 🚫 STRICT DEVELOPMENT STANDARDS (PORTABLE)

> **MANDATE:** มาตรฐานการพัฒนาสำหรับแอปพลิเคชันยุคใหม่ เน้นความเสถียรและประสิทธิภาพสูงสุด

## ⚡ 1. ZERO-ERROR POLICY
*   ทุกการ Push ต้องผ่าน `bash .gemini/bin/aicheck.sh`
*   **เกณฑ์มาตรฐาน:** Error = 0 (ห้ามมีข้อผิดพลาดระดับวิกฤตที่ทำให้ Build ล้มเหลว)
*   **Linting:** ห้ามปิด Linter เพื่อหลีกเลี่ยง Warning ให้ใช้วิธีแก้ไขที่เหมาะสมแทน

## 🏗️ 2. ARCHITECTURAL INTEGRITY
*   **Atomic Changes:** แต่ละ Commit ควรจัดการเรื่องเดียว (Single Responsibility)
*   **Safety First:** ตรวจสอบ Environment Variables และจุดเปราะบางด้านความปลอดภัยเสมอ
*   **Documentation Continuous:** อัปเดต `PROJECT_STATE.md` ทุกครั้งที่มีการตัดสินใจทางสถาปัตยกรรมที่สำคัญ

## 🚀 3. DEPLOYMENT ASSURANCE
*   ตรวจสอบสถานะบน Cloud Provider (Vercel/Netlify/AWS) ทันทีหลังสั่ง Push
*   ภารกิจถือว่า "เสร็จสมบูรณ์" เมื่อหน้าเว็บจริงแสดงผลถูกต้องและไม่มีข้อผิดพลาดในระดับ Production

---
*Blueprint Authority v1.0*
