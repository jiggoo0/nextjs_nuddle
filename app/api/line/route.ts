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
            const messages: any[] = [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/signature-98-noodle.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/signature-98-noodle.webp`,
              },
              {
                type: "text",
                text: `[🍴 เมนูแนะนำ - ${siteConfig.identity.name}]\n\n🌟 บะหมี่ไข่ 98% นวดสดทุกวัน\n1. ${siteConfig.pricing.tiers[1].name} (${siteConfig.pricing.tiers[1].price})\n2. ${siteConfig.pricing.tiers[0].name} (${siteConfig.pricing.tiers[0].price})\n3. ${siteConfig.pricing.tiers[2].name} (${siteConfig.pricing.tiers[2].price})\n\nอร่อยระดับตำนาน 9 ปี เมืองตากครับ`,
                quickReply: quickReplyItems
              }
            ];
            return client.replyMessage(event.replyToken, messages);
          } else if (
            userMessage.includes("พิกัด") ||
            userMessage.includes("ที่ตั้ง") ||
            userMessage === "2"
          ) {
            const messages: any[] = [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/shop-atmosphere.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/shop-atmosphere.webp`,
              },
              {
                type: "text",
                text: `[📍 พิกัดและเวลาเปิดให้บริการ]\n\n🏠 ${siteConfig.contact.address}\n⏰ เปิด: ${siteConfig.contact.businessHours}\n\n🗺️ แผนที่ Google Maps:\n${siteConfig.contact.googleMaps}`,
                quickReply: quickReplyItems
              }
            ];
            return client.replyMessage(event.replyToken, messages);
          } else if (userMessage.includes("สั่ง") || userMessage === "3") {
            replyText = `[☎️ บริการสั่งล่วงหน้า / สอบถามคิว]\n\nเบอร์โทรสายตรง:\n📞 ${siteConfig.contact.phone} (เฮียเนก/เจ๊ตั๊ก)\n\n💡 สั่งล่วงหน้า 15-20 นาที เพื่อความรวดเร็วครับ`;
          } else if (userMessage.includes("จัดเลี้ยง") || userMessage === "4") {
            const messages: any[] = [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/kapoamom-sauce.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/kapoamom-sauce.webp`,
              },
              {
                type: "text",
                text: `[🤝 บริการจัดเลี้ยงและธุรกิจ]\n\n✨ ${siteConfig.catering.title}\n📌 จุดเด่น: ${siteConfig.catering.highlights.join(", ")}\n\n🛍️ ซอสกะเพรา kapoamom:\n- สูตรลับ 9 ปี บรรจุขวด พร้อมส่งทั่วไทย\n\n📞 ปรึกษาธุรกิจ: ${siteConfig.contact.phone}`,
                quickReply: quickReplyItems
              }
            ];
            return client.replyMessage(event.replyToken, messages);
          } else if (userMessage === "0") {
            const greeting =
              userId === ADMIN_USER_ID
                ? "สวัสดีครับ นายท่านอลงกรณ์"
                : `สวัสดีครับ ${siteConfig.identity.name} ยินดีให้บริการครับ`;
            replyText = `${greeting}\nตำนานบะหมี่เมืองตาก 9 ปี\n\nกรุณาเลือกบริการที่ท่านต้องการครับ 👇`;
          } else {
            replyText = `ขออภัยครับ ระบบไม่เข้าใจคำสั่งนี้ 🙏\n\nกรุณาเลือกกดปุ่มเมนูที่แถบด้านล่างครับ 👇`;
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
