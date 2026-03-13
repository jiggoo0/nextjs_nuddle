import { NextResponse } from "next/server";
import { Client, WebhookEvent } from "@line/bot-sdk";

import { siteConfig } from "@/constants/site-config";

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN || "",
  channelSecret: process.env.LINE_CHANNEL_SECRET || "",
};

const client = new Client(config);
const ADMIN_USER_ID = "Uc260e0d2f3f3e9f3201d33c18ac9abb9"; // User ID ของคุณอลงกรณ์

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const events: WebhookEvent[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === "message" && event.message.type === "text") {
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
            return client.replyMessage(event.replyToken, { type: "text", text: replyText });
          }

          let replyText: string;
          const quickReplyItems = {
            items: [
              { type: "action", action: { type: "message", label: "🍜 เมนูแนะนำ", text: "1" } },
              { type: "action", action: { type: "message", label: "📍 พิกัดร้าน", text: "2" } },
              { type: "action", action: { type: "message", label: "☎️ สั่งอาหาร", text: "3" } },
              { type: "action", action: { type: "message", label: "🤝 จัดเลี้ยง", text: "4" } },
              { type: "action", action: { type: "message", label: "🏠 เมนูหลัก", text: "0" } },
            ],
          };

          // --- LOGIC: NAVIGATION MENU (Keywords & Numbers) ---
          if (userMessage.includes("เมนู") || userMessage === "1") {
            replyText = `[🍜 เมนูแนะนำ - ${siteConfig.identity.name}]
1. ${siteConfig.pricing.tiers[1].name} (${siteConfig.pricing.tiers[1].price}) *ยอดนิยม*
2. ${siteConfig.pricing.tiers[0].name} (${siteConfig.pricing.tiers[0].price})
3. ${siteConfig.pricing.tiers[2].name} (${siteConfig.pricing.tiers[2].price})

🌐 ดูเมนูและรูปภาพทั้งหมด:
${siteConfig.identity.url}/#menu`;
          } else if (
            userMessage.includes("พิกัด") ||
            userMessage.includes("ที่ตั้ง") ||
            userMessage === "2"
          ) {
            replyText = `[📍 พิกัดและเวลาเปิดให้บริการ]
🏠 ที่ตั้ง: ${siteConfig.contact.address}
⏰ เปิด: ${siteConfig.contact.businessHours}

🗺️ แผนที่ Google Maps:
${siteConfig.contact.googleMaps}`;
          } else if (userMessage.includes("สั่ง") || userMessage === "3") {
            replyText = `[☎️ สั่งอาหารล่วงหน้า]
📞 โทร: ${siteConfig.contact.phone}
(เฮียเนก หรือ เจ๊ตั๊ก ยินดีรับสายด้วยตัวเองครับ)

⏱️ แนะนำ: สั่งล่วงหน้า 15-20 นาที เพื่อความรวดเร็วครับ`;
          } else if (userMessage.includes("จัดเลี้ยง") || userMessage === "4") {
            replyText = `[🤝 บริการจัดเลี้ยงนอกสถานที่]
${siteConfig.catering.title}

📌 จุดเด่น: ${siteConfig.catering.highlights.join(", ")}
📞 สอบถาม: ${siteConfig.contact.phone}`;
          } else if (userMessage === "0") {
            const greeting =
              userId === ADMIN_USER_ID
                ? "สวัสดีครับ นายท่านอลงกรณ์"
                : `สวัสดีครับ ${siteConfig.identity.name} ยินดีให้บริการครับ`;
            replyText = `${greeting}
ตำนานบะหมี่ไข่ 98% เมืองตาก 9 ปี

กรุณาเลือกกดปุ่มเมนูที่ต้องการด้านล่างได้เลยครับ 👇`;
          } else {
            replyText = `ขออภัยครับ ระบบไม่เข้าใจข้อความนี้ 🙏

ท่านสามารถเลือกกดปุ่มด้านล่างเพื่อรับข้อมูลที่ต้องการได้ทันทีครับ 👇`;
          }

          return client.replyMessage(event.replyToken, {
            type: "text",
            text: replyText,
            quickReply: quickReplyItems as any,
          });
        }
      })
    );

    return NextResponse.json(results);
  } catch (err) {
    console.error("LINE Webhook Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
