# 🚫 STRICT DEVELOPMENT STANDARDS (PORTABLE)

> **MANDATE:** มาตรฐานการพัฒนาสำหรับแอปพลิเคชันยุคใหม่ เน้นความเสถียรและประสิทธิภาพสูงสุด

## ⚡ 1. ZERO-ERROR POLICY

- ทุกการ Push ต้องผ่าน `bash .gemini/bin/aicheck.sh`
- **เกณฑ์มาตรฐาน:** Error = 0 (ห้ามมีข้อผิดพลาดระดับวิกฤตที่ทำให้ Build ล้มเหลว)
- **Linting:** ห้ามปิด Linter เพื่อหลีกเลี่ยง Warning ให้ใช้วิธีแก้ไขที่เหมาะสมแทน

## 🛡️ 2. CREATIVE PROBLEM SOLVING & REPAIR

- **Immediate Action:** เมื่อเกิด Error หรือ Warning ต้องดำเนินการแก้ไข "ทันที" ห้ามปล่อยผ่านหรือสะสมไว้จนจบโปรเจกต์
- **Quality Preservation:** การแก้ไขปัญหาต้องเป็นแบบ "สร้างสรรค์" และ "ไม่ลดคุณภาพโค้ด" (No Hacky Fixes)
  - **ห้าม:** ลบ Code ที่สำคัญออกเพียงเพื่อทำให้ Error หายไป
  - **ห้าม:** ใช้ `any` หรือ `@ts-ignore` เพื่อเลี่ยงการเช็ก Type ยกเว้นกรณีที่จำเป็นอย่างยิ่งและต้องมีคำอธิบาย (JSDoc) กำกับ
  - **ต้อง:** แก้ไขที่ต้นเหตุ (Root Cause Analysis) และปรับปรุงโครงสร้างให้ดีขึ้นกว่าเดิม (Refactoring with Intent)

## 🏗️ 3. ARCHITECTURAL INTEGRITY

- **Atomic Changes:** แต่ละ Commit ควรจัดการเรื่องเดียว (Single Responsibility)
- **Safety First:** ตรวจสอบ Environment Variables และจุดเปราะบางด้านความปลอดภัยเสมอ
- **Documentation Continuous:** อัปเดต `PROJECT_STATE.md` ทุกครั้งที่มีการตัดสินใจทางสถาปัตยกรรมที่สำคัญ

## 🚀 4. DEPLOYMENT & VERCEL AUTOMATION

- **Proactive Verification:** ทันทีที่มีการสั่ง `git push` AI "ต้อง" รันคำสั่งตรวจสอบสถานะผ่าน Vercel CLI (`vercel list` หรือ `vercel inspect`) โดยอัตโนมัติ
- **Zero-Blind Push:** ห้ามจบงานเพียงแค่การ Push ขึ้น GitHub AI ต้องรอและตรวจสอบจนกว่าสถานะการ Deploy จะเป็น `Ready` หรือ `Success`
- **Production Validation:** ตรวจสอบ Error Log ในระดับ Production ทันทีหลัง Deploy หากพบปัญหาต้องรีบแจ้งและเสนอแนวทางแก้ไข (Hotfix) ทันที
- **Live Reporting:** รายงาน URL ของ Production/Preview Branch และสถานะการ Build ให้ผู้ใช้ทราบทันทีเพื่อยืนยันว่าหน้าเว็บจริงทำงานได้ถูกต้อง 100%

---

_Blueprint Authority v1.1_ (Updated: Automated Deployment Protocol)
