# 🍜 ช.สหชัย เกี๊ยวปูหมูแดง (ช.สหชัย x AEMDEVWEB)

> **"ตำนานบะหมี่ไข่ 98% หนึบสู้ฟัน เครื่องแน่นจุใจ ครองใจคนตากมานานกว่า 9 ปี"**

โปรเจกต์นี้คือการยกระดับธุรกิจดั้งเดิมของร้าน **ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก** สู่แพลตฟอร์มดิจิทัลที่ทันสมัย โดยใช้เทคโนโลยีเว็บระดับสูงและการตลาดออนไลน์ภายใต้การดูแลของ **AEMDEVWEB**

---

## ✨ ไฮไลท์ของโปรเจกต์ (Project Highlights)

- **Legendary Taste:** ถ่ายทอดเรื่องราวของเฮียเนกและเจ๊ตั๊ก จากอดีตสีกากีสู่ผ้ากันเปื้อนแดง
- **kapoamom Brand:** การเปิดตัวแบรนด์ซอสกะเพรา "ฝีมือแม่" (Managed by AEMDEVWEB)
- **LINE Bot Integration:** ระบบตอบกลับอัตโนมัติแบบมีมาตรฐาน (1, 2, 3, 4, 0) เพื่อบริการลูกค้าที่รวดเร็ว
- **MDX Knowledge Base:** คลังความรู้เมืองตากและคู่มือเมนูอิ่มคุ้ม ผ่านระบบ MDX Blog

---

## 🛠️ ข้อมูลทางเทคนิค (Tech Stack)

เราเลือกใช้เครื่องมือที่ทันสมัยที่สุดเพื่อให้เว็บไซต์มีประสิทธิภาพสูงสุด (Core Web Vitals):

- **Framework:** Next.js 16.1.6 (Latest Webpack Engine)
- **Library:** React 19.2.4 (Stable)
- **Styling:** Tailwind CSS 4.1.9 (Modern Utility-first)
- **Animation:** Framer Motion (Smooth Interactions)
- **UI Components:** Shadcn UI (Radix UI Architecture)
- **Icons:** Lucide React (Zero Emoji Policy in Code)
- **LINE Integration:** LINE Messaging API SDK v10

---

## 📂 โครงสร้างโฟลเดอร์ (Folder Structure)

```text
├── app/                 # Next.js App Router (Page, API, Layout)
├── components/          # React Components (UI, Layout, Home)
├── constants/           # Single Source of Truth (site-config.ts)
├── content/blog/        # เนื้อหาบทความ MDX
├── data/                # JSON Data Store
├── public/images/       # Assets & Media
└── .gemini/             # AI Infrastructure & Context (Standard)
```

---

## 🚀 เริ่มต้นใช้งาน (Getting Started)

### 1. ติดตั้ง Dependencies

```bash
pnpm install
```

### 2. รันโหมด Development

```bash
pnpm dev
```

### 3. ตรวจสอบคุณภาพโค้ด (AEMDEVWEB Standards)

```bash
pnpm check   # Type Checking
pnpm lint    # ESLint
pnpm format  # Prettier
bash .gemini/bin/aicheck.sh # Full Health Check
```

---

## 📜 มาตรฐานการพัฒนา (Development Standards)

1.  **Zero Emoji in Code:** ห้ามใช้ Emoji ในไฟล์ `.ts/.tsx` ให้ใช้ `lucide-react` เท่านั้น
2.  **SSOT Principle:** แก้ไขข้อมูลหลัก (ราคา, เมนู, ติดต่อ) ที่ `constants/site-config.ts` เท่านั้น
3.  **Stability First:** โปรเจกต์ต้อง Build ผ่าน 100% ก่อนการ Commit เสมอ
4.  **Security:** ข้อมูลลับ (Secrets) ต้องอยู่ใน `.env` และห้าม Commit ขึ้น GitHub

---

## 🤝 ติดต่อและสนับสนุน (Contact)

- **ช.สหชัย เกี๊ยวปูหมูแดง:** 090-690-6080 (เฮียเนก/เจ๊ตั๊ก)
- **Digital Transformation:** โดย [AEMDEVWEB](https://sahachai.aemdevweb.com)
- **ที่ตั้ง:** ถนนมหาดไทยบำรุง ต.หนองหลวง อ.เมือง จ.ตาก 63000

---

_© 2026 ช.สหชัย เกี๊ยวปูหมูแดง x AEMDEVWEB. All rights reserved._
