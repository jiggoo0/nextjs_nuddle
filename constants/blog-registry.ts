export interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
}

export const blogRegistry: BlogEntry[] = [
  {
    slug: "digital-heritage-aemdevweb",
    title: "นวัตกรรมดิจิทัลกับร้านบะหมี่ 9 ปี: เมื่อ AEMDEVWEB ยกระดับตำนานสู่โลกออนไลน์",
    date: "2026-03-13",
    excerpt: "เจาะลึกเบื้องหลังการปรับตัวของร้าน ช.สหชัย สู่ระบบจัดการข้อมูลและ SEO ที่มีประสิทธิภาพ พัฒนาโดย AEMDEVWEB",
    category: "Technology",
    image: "signature-98-noodle.webp"
  },
  {
    slug: "menu-update-2025",
    title: "อัปเดตเมนูและราคาล่าสุด: ช.สหชัย บะหมี่เกี๊ยวปูหมูแดง (อิ่มจุใจ 2569)",
    date: "2026-03-13",
    excerpt: "รวมรายการเมนูทั้งหมดของร้าน ช.สหชัย ทั้งสายเส้นและสายข้าว พร้อมราคาที่เป็นธรรมและปริมาณที่จุใจ",
    category: "Menu",
    image: "menu-board-rice.jpg"
  },
  {
    slug: "catering-bpp-tak",
    title: "ภารกิจเสร็จสิ้น! เมื่อ ช.สหชัย บุกค่าย ตชด. จ.ตาก เสิร์ฟบะหมี่ระดับตำนาน",
    date: "2026-03-12",
    excerpt: "ความภูมิใจในการได้รับความไว้วางใจให้จัดเลี้ยงนอกสถานที่ ณ กองบังคับการตำรวจตระเวนชายแดน จังหวัดตาก",
    category: "Performance",
    image: "catering-bpp-tak.webp"
  },
  {
    slug: "catering-revenue-tak",
    title: "เมื่อความอร่อยมาเยือน! ช.สหชัย จัดเลี้ยงบะหมี่ ณ สำนักงานสรรพากรพื้นที่ตาก",
    date: "2026-03-11",
    excerpt: "บันทึกผลงานการจัดเลี้ยงนอกสถานที่เพื่อเติมพลังให้แก่เจ้าหน้าที่สำนักงานสรรพากรจังหวัดตาก ในงานประชุมประจำปี",
    category: "Performance",
    image: "catering-revenue-tak.webp"
  },
  {
    slug: "legend-of-sahachai-noodle",
    title: "5 เหตุผลที่ทำไมบะหมี่เกี๊ยวปู ช.สหชัย ถึงเป็นตำนานเมืองตากกว่า 9 ปี",
    date: "2026-03-10",
    excerpt: "เปิดสูตรลับความอร่อยที่มัดใจชาวตากมาเกือบสิบปี ตั้งแต่เส้นบะหมี่นวดมือไปจนถึงเนื้อปูแกะสดใหม่",
    category: "Story",
    image: "blog-noodle-1.webp"
  },
  {
    slug: "secret-red-pork-recipe",
    title: "สูตรลับหมูแดงย่างเตาถ่าน เฮียเนก: มรดกความอร่อยที่หาทานยากในปัจจุบัน",
    date: "2026-03-05",
    excerpt: "ทำไมหมูแดงที่นี่ถึงหอมและนุ่มไม่เหมือนใคร? ตามไปดูเทคนิคการย่างด้วยเตาถ่านโบราณของเฮียเนกที่รักษามาตรฐานมานานกว่า 9 ปี",
    category: "Kitchen",
    image: "menu1.jpg"
  },
  {
    slug: "menu-guide",
    title: "คู่มือความอร่อย: วิธีสั่งบะหมี่ ช.สหชัย ให้ฟินเหมือนคนตากแท้ๆ",
    date: "2026-03-01",
    excerpt: "เจาะลึกวิธีการสั่งเมนูเด็ดและสูตรผสมความอร่อยที่ทำให้บะหมี่ไข่ 98% ของเรามัดใจลูกค้ามาอย่างยาวนาน",
    category: "Guide",
    image: "noodle-making.webp"
  },
  {
    slug: "one-day-trip-tak",
    title: "เที่ยวเมืองตาก 1 วัน: ไหว้พระริมน้ำ เดินสะพานกิตติขจร แล้วแวะเติมพลังที่ ช.สหชัย",
    date: "2026-02-28",
    excerpt: "รวมแผนเที่ยวจังหวัดตากแบบวันเดียวครบ จัดเต็มจุดเช็คอินสำคัญและร้านอร่อยที่ไม่ควรพลาดสำหรับนักเดินทาง",
    category: "Travel",
    image: "menu8.jpg"
  }
];
