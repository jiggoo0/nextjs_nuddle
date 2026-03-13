# 🤖 AI BEHAVIOR & CODING STANDARDS

> **CRITICAL RULE:** AI ต้องอ่านและปฏิบัติตามกฎในไฟล์นี้ 100% หากฝ่าฝืนถือว่าเป็นการละเมิด Core Directives

## 1. 🚫 ZERO EMOJI POLICY IN CODE (กฎห้ามใช้ Emoji เด็ดขาด)

- **ห้ามเด็ดขาด:** ห้ามใส่ตัวอักษร Emoji (เช่น 🔥, 🍜, 🚀, ⭐) ลงในไฟล์ Source Code ที่ทำงานได้ (Executable Code) เช่น `.ts`, `.tsx`, `.js`, `.mjs`
- **ทางออก (Solution):** ให้ใช้ Icons จากไลบรารีที่กำหนดเท่านั้น ในโปรเจกต์นี้คือ **`lucide-react`**
- **ข้อยกเว้น:** อนุญาตให้ใช้ Emoji ได้เฉพาะใน:
  1. ไฟล์ Markdown (`.md`, `.mdx`) ที่เป็นเนื้อหา
  2. ข้อความสนทนากับผู้ใช้ (Chat UI)
  3. ไฟล์โครงสร้างเอกสารภายในโฟลเดอร์ `.gemini`

## 2. 🗃️ SINGLE SOURCE OF TRUTH (SSOT)

- หากผู้ใช้สั่งแก้ไขข้อมูล "เนื้อหาหน้าเว็บ", "ข้อมูลติดต่อ", "เมนู", หรือ "ราคา"
- **ห้าม:** Hardcode ข้อมูลลงในไฟล์ Component `.tsx` โดยตรง
- **ต้องทำ:** เข้าไปแก้ไขที่ไฟล์ `constants/site-config.ts` เท่านั้น เพื่อให้ข้อมูลเชื่อมโยงกันทั้งระบบ

## 3. 🗺️ INTERNAL ROUTING (การลิงก์ภายใน)

- ห้ามใช้ Tag `<a>` แบบธรรมดาสำหรับการลิงก์ภายในเว็บไซต์
- ให้ใช้ `<Link href="...">` จาก `next/link` เสมอ เพื่อรักษาประสิทธิภาพแบบ Single Page Application (SPA)

## 4. 🎨 STYLING (Tailwind CSS 4)

- ยึดมั่นในการใช้ Tailwind CSS 4
- ห้ามเขียน CSS แบบ Inline (เช่น `style={{ color: 'red' }}`) เว้นแต่เป็นค่า Dynamic ที่คำนวณจาก JS
- ใช้สีจาก Theme variables ที่กำหนดไว้แล้ว เช่น `text-primary`, `bg-muted`, `bg-background`

## 6. 🚫 NO UNAUTHORIZED COMMIT OR DEPLOY (กฎข้อห้ามเด็ดขาด)

- **ห้ามเด็ดขาด:** AI ห้ามทำการ `git commit`, `git push` หรือ `vercel deploy` (รวมถึงคำสั่งที่ส่งผลต่อ Production) โดยพละการ
- **เงื่อนไข:** จะดำเนินการได้ก็ต่อเมื่อผู้ใช้มีคำสั่งระบุชัดเจน เช่น "Commit การเปลี่ยนแปลงนี้" หรือ "Deploy ขึ้น Production ได้เลย" เท่านั้น
- **เป้าหมาย:** เพื่อป้องกันการนำโค้ดที่ยังไม่ผ่านการตรวจสอบขั้นสุดท้ายขึ้นสู่ระบบจริงโดยไม่ได้รับอนุญาต

## 7. 🧹 FORMAT & LINT STANDARDS

- ต้องใช้ Prettier ในการจัดรูปแบบโค้ดให้เป็นระเบียบตามการตั้งค่าในโปรเจกต์
- ห้ามปล่อยให้มี ESLint errors หรือ Warning ที่สำคัญก่อนจบงาน
- ใช้ `pnpm format` และ `pnpm lint` เพื่อตรวจสอบความเรียบร้อยเสมอ
