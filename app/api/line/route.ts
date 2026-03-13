import { NextResponse } from 'next/server';
import { Client, WebhookEvent } from '@line/bot-sdk';

import { siteConfig } from '@/constants/site-config';

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
};

const client = new Client(config);
const ADMIN_USER_ID = "Uc260e0d2f3f3e9f3201d33c18ac9abb9"; // User ID ของคุณอลงกรณ์

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const events: WebhookEvent[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === 'message' && event.message.type === 'text') {
          const userMessage = event.message.text.trim().toLowerCase();
          const userId = event.source.userId;
          
          // --- SPECIAL LOGIC: ADMIN RECOGNITION ---
          if (userId === ADMIN_USER_ID && userMessage === "status") {
            const replyText = `[AEMDEVWEB SYSTEM STATUS]
- Project: ${siteConfig.identity.name}
- Domain: ${siteConfig.identity.url}
- Engine: Next.js 16 (React 19)
- Webhook: Active
- Developer: นายอลงกรณ์ ยมเกิด

ระบบทำงานปกติ 100% ครับนายท่าน`;
            return client.replyMessage(event.replyToken, { type: 'text', text: replyText });
          }

          let replyText: string;

          // --- LOGIC: NAVIGATION MENU (Keywords & Numbers) ---
          if (userMessage.includes("เมนู") || userMessage === "1") {
            replyText = `[🍜 เมนูแนะนำ - ${siteConfig.identity.name}]
1. ${siteConfig.pricing.tiers[1].name} (${siteConfig.pricing.tiers[1].price}) *ยอดนิยม*
2. ${siteConfig.pricing.tiers[0].name} (${siteConfig.pricing.tiers[0].price})
3. ${siteConfig.pricing.tiers[2].name} (${siteConfig.pricing.tiers[2].price})

🌐 ดูเมนูและรูปภาพทั้งหมด:
${siteConfig.identity.url}/#menu

(ราคาอาจมีการเปลี่ยนแปลงตามขนาดพิเศษ/ธรรมดาครับ)`;
          } else if (userMessage.includes("พิกัด") || userMessage.includes("ที่ตั้ง") || userMessage === "2") {
            replyText = `[📍 พิกัดและเวลาเปิดให้บริการ]
🏠 ที่ตั้ง: ${siteConfig.contact.address}
⏰ เวลาเปิด: ${siteConfig.contact.businessHours}

🗺️ แผนที่ Google Maps:
${siteConfig.contact.googleMaps}

ยินดีต้อนรับทุกท่านสู่ร้านลับเมืองตากครับ`;
          } else if (userMessage.includes("สั่ง") || userMessage === "3") {
            replyText = `[☎️ ช่องทางการสั่งอาหารล่วงหน้า]
📞 โทร: ${siteConfig.contact.phone}
(เฮียเนก หรือ เจ๊ตั๊ก ยินดีรับสายด้วยตัวเองครับ)

⏱️ แนะนำ: สั่งล่วงหน้า 15-20 นาที เพื่อความรวดเร็วและไม่ต้องรอคิวครับ

(เราใส่ใจทุกชามเพื่อคุณภาพที่ดีที่สุด)`;
          } else if (userMessage.includes("จัดเลี้ยง") || userMessage === "4") {
            replyText = `[🤝 บริการจัดเลี้ยงนอกสถานที่ (Catering)]
${siteConfig.catering.title}

✨ ${siteConfig.catering.description}
📌 จุดเด่น: ${siteConfig.catering.highlights.join(", ")}

สอบถามรายละเอียดเพิ่มเติม:
📞 โทร: ${siteConfig.contact.phone}

(สร้างความประทับใจให้แขกของคุณด้วยบะหมี่ระดับตำนาน)`;
          } else if (userMessage === "0") {
            const greeting = userId === ADMIN_USER_ID ? "สวัสดีครับ นายท่านอลงกรณ์ (AEMDEVWEB)" : `ยินดีต้อนรับสู่ ${siteConfig.identity.name}`;
            replyText = `${greeting}
ตำนานบะหมี่ไข่ 98% ของอร่อยเมืองตาก 9 ปี

กรุณาเลือกกดหมายเลขเพื่อดูข้อมูลครับ:
1. ดูเมนูแนะนำและราคา
2. พิกัดร้านและเวลาเปิด-ปิด
3. สั่งอาหารล่วงหน้า/จองโต๊ะ
4. บริการรับเหมาจัดเลี้ยง (Catering)
0. แสดงเมนูนี้อีกครั้ง

แอดมินยินดีให้บริการครับ 🙏`;
          } else {
            const greeting = userId === ADMIN_USER_ID ? "สวัสดีครับ นายท่านอลงกรณ์ (AEMDEVWEB)" : `สวัสดีครับ ${siteConfig.identity.name} ยินดีให้บริการครับ`;
            replyText = `${greeting}
ขออภัยครับ ระบบไม่เข้าใจข้อความนี้

กรุณาเลือกกดหมายเลขเพื่อรับข้อมูลที่ถูกต้องครับ:
1. ดูเมนูแนะนำ
2. พิกัดร้าน
3. สั่งอาหาร
4. บริการจัดเลี้ยง
0. กลับสู่เมนูหลัก`;
          }

          return client.replyMessage(event.replyToken, {
            type: 'text',
            text: replyText,
          });
        }
      })
    );

    return NextResponse.json(results);
  } catch (err) {
    console.error('LINE Webhook Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
