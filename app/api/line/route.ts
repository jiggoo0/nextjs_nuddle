import { NextResponse } from 'next/server';
import { Client, WebhookEvent } from '@line/bot-sdk';

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
          const userMessage = event.message.text.trim();
          const userId = event.source.userId;
          
          let replyText = "";

          // --- SPECIAL LOGIC: ADMIN RECOGNITION ---
          if (userId === ADMIN_USER_ID && userMessage.toLowerCase() === "status") {
            replyText = "🛡️ [AEMDEVWEB SYSTEM STATUS]\n- Project: Nodlefamily\n- Domain: sahachai.aemdevweb.com\n- Engine: Next.js 16 (React 19)\n- Webhook: Active\n- Developer: นายอลงกรณ์ ยมเกิด\n\nระบบทำงานปกติ 100% ครับนายท่าน! 🚀";
            return client.replyMessage(event.replyToken, { type: 'text', text: replyText });
          }

          // --- LOGIC: NAVIGATION MENU ---
          switch (userMessage) {
            case "1":
              replyText = "🍜 [เมนูแนะนำ ช.สหชัย]\n1. บะหมี่เกี๊ยวปูหมูแดงพิเศษ (60.-)\n2. บะหมี่ปู หมูแดง (50/60.-)\n3. หมูแดงย่างเตาถ่าน (จานแยก)\n\nดูรูปเมนูทั้งหมดได้ที่: https://sahachai.aemdevweb.com/menu";
              break;
            case "2":
              replyText = "📍 [พิกัดและเวลา]\n- ตรงข้ามร้านทอง สินสุวรรณ 3 จ.ตาก\n- เปิด: 11:00 - 20:00 น. (จันทร์-เสาร์)\n- ปิด: วันอาทิตย์\n\nแผนที่ Google Maps: https://maps.app.goo.gl/KLdnUCffDN6RZpTT8";
              break;
            case "3":
              replyText = "📞 [สั่งอาหารล่วงหน้า]\nโทร: 083-630-1174 (เฮียเนก/เจ๊ตั๊ก)\nหรือแจ้งรายการอาหารในแชทนี้ได้เลยครับ ทีมงานจะรีบตรวจสอบให้เร็วที่สุด";
              break;
            case "4":
              replyText = "💬 [ติดต่อแอดมิน]\nกรุณาพิมพ์ข้อความทิ้งไว้ได้เลยครับ เฮียเนกหรือเจ๊ตั๊กจะรีบเข้ามาตอบกลับด้วยตัวเองครับ\n\n(ระบบนี้พัฒนาโดย AEMDEVWEB)";
              break;
            default:
              const greeting = userId === ADMIN_USER_ID ? "สวัสดีครับ นายท่านอลงกรณ์ (AEMDEVWEB)! 🛡️" : "สวัสดีครับ ช.สหชัย ยินดีให้บริการ! 🍜";
              replyText = `${greeting}\nตำนานบะหมี่ 9 ปี เมืองตาก\n\nกรุณากดตัวเลขเพื่อเลือกดูข้อมูล:\n1. ดูเมนูแนะนำ\n2. ที่ตั้งร้านและเวลาเปิด-ปิด\n3. สั่งอาหารล่วงหน้า\n4. ติดต่อเจ้าของร้าน\n\nกด 0 เพื่อเรียกเมนูนี้อีกครั้งครับ`;
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
