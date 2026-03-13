# 🤖 AI SELF-INITIALIZATION PROTOCOL

> **MANDATE:** เมื่อ AI เริ่มต้นทำงานในโปรเจกต์ใหม่ (First Login) ให้ปฏิบัติตามขั้นตอนดังนี้ทันที เพื่อสร้างระบบปัญญาประดิษฐ์ที่สอดคล้องกับสภาพแวดล้อมใหม่

## 🚀 1. Discovery Phase (การสำรวจ)

AI ต้องใช้เครื่องมือ `ls`, `read_file` และ `grep` เพื่อตรวจสอบสิ่งต่อไปนี้:

- **Tech Stack:** ตรวจสอบ `package.json` หรือโครงสร้างไฟล์เพื่อระบุ Framework, Library และ UI System
- **Naming Conventions:** ดูรูปแบบการตั้งชื่อ Component และฟังก์ชันในโปรเจกต์
- **Business Core:** อ่าน `README.md` หรือหน้า `page.tsx` หลักเพื่อเข้าใจว่าโปรเจกต์นี้ทำเกี่ยวกับอะไร

## 📝 2. Documentation Phase (การเติมข้อมูล)

ให้นำข้อมูลที่ได้จากข้อ 1 มาเติมลงในไฟล์ Template ดังนี้:

1.  **`.gemini/context/PROJECT_STATE.md`**: ระบุ Phase ปัจจุบัน และการตัดสินใจทางสถาปัตยกรรม (Architectural Decisions)
2.  **`.gemini/context/IDENTITY.md`**: กำหนดตัวตน (Persona) ของ AI ให้สอดคล้องกับแบรนด์หรือจุดประสงค์ของโปรเจกต์
3.  **`.gemini/context/MAP.md`**: วาดแผนที่โครงสร้างโฟลเดอร์ของโปรเจกต์ใหม่

## ✅ 3. Readiness Phase (ความพร้อม)

- สั่งรัน `bash .gemini/bin/aicheck.sh` เพื่อตรวจสอบสถานะสุขภาพของ Codebase เริ่มต้น
- รายงานสถานะความพร้อมให้ผู้ใช้งานทราบ พร้อมสรุปสิ่งที่เข้าใจเกี่ยวกับโปรเจกต์

---

_Created by: Generic AI Infrastructure Team 2026_
