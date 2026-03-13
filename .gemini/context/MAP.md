# PROJECT DATA MAP: ช.สหชัย เกี๊ยวปูหมูแดง

> **MANDATE:** แผนที่นี้ใช้สำหรับนำทาง AI ในการค้นหาและแก้ไขข้อมูล ห้าม AI คาดเดาโครงสร้างเอง ให้ยึดตามแผนที่นี้เป็นหลัก

## 1. Single Source of Truth (SSOT)
จุดศูนย์กลางของข้อมูลทั้งหมดในเว็บไซต์ หากมีการขอแก้ไข ข้อมูลร้าน, เมนู, ราคา, ลิงก์ ให้มาที่นี่เท่านั้น:
*   **Location:** `constants/site-config.ts`
*   **Contents:** ข้อมูลติดต่อ, ลิงก์เมนู (NavLinks), ข้อมูล Hero, จุดเด่นร้าน, ราคาเมนู (Pricing), และรีวิวลูกค้า

## 2. Dynamic Content (MDX Blog)
เนื้อหาบทความแบบยาว เรื่องราวของร้าน และคู่มือเมนู:
*   **Location:** `content/blog/*.mdx`
*   **Engine:** เรนเดอร์ผ่าน `app/blog/[slug]/page.tsx`
*   **Components:** `mdx-components.tsx` (ควบคุม UI ของบทความ)

## 3. Core UI Components
ส่วนประกอบหน้าจอที่ถูกเรียกใช้บ่อย:
*   **Navigation:** `components/navigation.tsx`
*   **Hero Section:** `components/sections/hero.tsx`
*   **Pricing/Menu:** `components/sections/pricing.tsx`
*   **Footer:** `components/sections/footer.tsx`
*   **UI Library (Shadcn):** `components/ui/*.tsx`

## 4. API & Backend
ระบบหลังบ้านและการเชื่อมต่อ:
*   **LINE Webhook:** `app/api/line/route.ts` (ระบบตอบกลับอัตโนมัติ)

## 5. Assets & Media
รูปภาพที่ใช้บนเว็บไซต์:
*   **Location:** `public/images/*.{jpg,png,webp}`
*   **Rule:** ต้องอ้างอิง path เริ่มต้นที่ `/images/...` เสมอเมื่อใช้กับ `next/image`
