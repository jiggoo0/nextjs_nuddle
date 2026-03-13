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

          let replyText = "";

          // --- LOGIC: NAVIGATION MENU (Keywords & Numbers) ---
          if (userMessage.includes("เมนู") || userMessage === "1") {
            replyText = `[เมนูแนะนำ ${siteConfig.identity.name}]
1. บะหมี่เกี๊ยวปูหมูแดงพิเศษ (60.-)
2. บะหมี่ปู หมูแดง (50/60.-)
3. หมูแดงย่างเตาถ่าน (จานแยก)
4. ข้าวหมูแดง/หมูกรอบ (35-50.-)

ดูรูปเมนูทั้งหมดได้ที่: ${siteConfig.identity.url}/#menu
อ่านคู่มือความอร่อย: ${siteConfig.identity.url}/about`;
          } else if (userMessage.includes("พิกัด") || userMessage.includes("ที่ตั้ง") || userMessage === "2") {
            replyText = `[พิกัดและเวลาเปิด-ปิด]
- ${siteConfig.contact.address}
- เปิด: 10:30 - 21:00 น. (จันทร์-เสาร์)
- หยุดทุกวันอาทิตย์

แผนที่ Google Maps: https://maps.app.goo.gl/KLdnUCffDN6RZpTT8`;
          } else if (userMessage.includes("สั่ง") || userMessage === "3") {
            replyText = `[สั่งอาหารล่วงหน้า]
- โทร: ${siteConfig.contact.phone} (เฮียเนก/เจ๊ตั๊ก)
- หรือแจ้งรายการอาหารในแชทนี้ได้เลยครับ ทีมงานจะรีบตรวจสอบให้เร็วที่สุด

(แนะนำ: สั่งล่วงหน้า 15-20 นาทีเพื่อความรวดเร็วครับ)`;
          } else if (userMessage.includes("ติดต่อ") || userMessage === "4") {
            replyText = `[ติดต่อแอดมิน]
กรุณาพิมพ์ข้อความทิ้งไว้ได้เลยครับ เฮียเนกหรือเจ๊ตั๊กจะรีบเข้ามาตอบกลับด้วยตัวเองครับ

(ระบบนี้พัฒนาโดย AEMDEVWEB)`;
          } else {
            const greeting = userId === ADMIN_USER_ID ? "สวัสดีครับ นายท่านอลงกรณ์ (AEMDEVWEB)" : `สวัสดีครับ ${siteConfig.identity.name} ยินดีให้บริการ`;
            replyText = `${greeting}
ตำนานบะหมี่ 9 ปี เมืองตาก

กรุณาเลือกดูข้อมูล:
1. ดูเมนูแนะนำ (พิมพ์ "เมนู")
2. ที่ตั้งร้านและเวลา (พิมพ์ "พิกัด")
3. สั่งอาหารล่วงหน้า (พิมพ์ "สั่งอาหาร")
4. ติดต่อเจ้าของร้าน (พิมพ์ "ติดต่อ")

กด 0 เพื่อเรียกเมนูนี้อีกครั้งครับ`;
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
