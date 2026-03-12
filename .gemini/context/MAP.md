# 🗺️ PROJECT MAP: NODLEFAMILY MIGRATION

## 🔗 Migration Relationships
| **Legacy (HTML/JS)** | **Modern (Next.js 16)** | **Status** |
| :--- | :--- | :--- |
| `index.html` | `app/page.tsx` | In Progress |
| `about.html` | `app/over-ons/page.tsx` | Pending |
| `services.html` | `app/diensten/page.tsx` | Pending |
| `contact.html` | `app/contact/page.tsx` | Pending |
| `components/navbar.html` | `components(1)/navigation.tsx` | Pending |
| `components/footer.html` | `components(1)/sections/footer.tsx` | Pending |
| `assets/css/*.css` | `app/globals.css` + Tailwind 4 | Initialized |
| `data/*.json` | `data/*.json` (Shared) | Ready |

## 📁 Key Directories
- **`.gemini/context/`**: แหล่งรวมข้อมูลธุรกิจและความรู้ของ AI
- **`app/`**: โครงสร้างหน้าเว็บหลัก (Next.js App Router)
- **`components(1)/`**: คลังส่วนประกอบ (Shadcn/UI + Custom TSX)
- **`assets/`**: (Legacy) ทรัพยากรเดิมสำหรับอ้างอิงและใช้งานชั่วคราว

---
*Created: Friday, March 13, 2026*
