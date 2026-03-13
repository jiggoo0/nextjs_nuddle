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

          // --- HELPER: UNIVERSAL QUICK REPLIES ---
          const quickReplyItems = {
            items: [
              { type: "action", action: { type: "message", label: "🍴 เมนูและราคา", text: "1" } },
              { type: "action", action: { type: "message", label: "📍 พิกัด/เวลาเปิด", text: "2" } },
              { type: "action", action: { type: "message", label: "☎️ สั่งอาหารด่วน", text: "3" } },
              { type: "action", action: { type: "message", label: "🤝 จัดเลี้ยง/ธุรกิจ", text: "4" } },
              { type: "action", action: { type: "message", label: "💬 คุยกับเจ้าของร้าน", text: "5" } },
              { type: "action", action: { type: "message", label: "🏠 หน้าแรก", text: "0" } },
            ],
          };

          // --- LOGIC: NAVIGATION MENU ---
          if (userMessage.includes("เมนู") || userMessage === "1") {
            const messages: any[] = [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/signature-98-noodle.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/signature-98-noodle.webp`,
              },
              {
                type: "text",
                text: `[🍴 เมนูแนะนำ - ${siteConfig.identity.name}]\n\n🌟 บะหมี่ไข่ 98% นวดสดทุกวัน\n1. ${siteConfig.pricing.tiers[1].name} (${siteConfig.pricing.tiers[1].price})\n2. ${siteConfig.pricing.tiers[0].name} (${siteConfig.pricing.tiers[0].price})\n3. ${siteConfig.pricing.tiers[2].name} (${siteConfig.pricing.tiers[2].price})\n\n🖼️ ดูเมนูเพิ่มเติม: ${siteConfig.identity.url}/menu`,
                quickReply: quickReplyItems
              }
            ];
            return client.replyMessage(event.replyToken, messages);
          } else if (userMessage.includes("พิกัด") || userMessage.includes("ที่ตั้ง") || userMessage === "2") {
            const messages: any[] = [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/shop-atmosphere.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/shop-atmosphere.webp`,
              },
              {
                type: "text",
                text: `[📍 ข้อมูลร้านและการเดินทาง]\n\n🏠 ที่ตั้ง: ${siteConfig.contact.address}\n⏰ เปิด: ${siteConfig.contact.businessHours}\n\n🗺️ แผนที่ Google Maps:\n${siteConfig.contact.googleMaps}\n\nยินดีต้อนรับสู่ร้านลับเมืองตากครับ`,
                quickReply: quickReplyItems
              }
            ];
            return client.replyMessage(event.replyToken, messages);
          } else if (userMessage.includes("สั่ง") || userMessage === "3") {
            replyText = `[☎️ บริการสั่งอาหารล่วงหน้า]\n\nเบอร์โทรสายตรง (เฮียเนก/เจ๊ตั๊ก):\n📞 ${siteConfig.contact.phone}\n\n⏱️ แนะนำสั่งล่วงหน้า 15-20 นาที\nเพื่อให้คุณได้รับบะหมี่ที่เหนียวหนึบที่สุดในเวลาที่คุณต้องการครับ`;
          } else if (userMessage.includes("จัดเลี้ยง") || userMessage.includes("ธุรกิจ") || userMessage === "4") {
            const messages: any[] = [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/kapoamom-sauce.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/kapoamom-sauce.webp`,
              },
              {
                type: "text",
                text: `[🤝 บริการจัดเลี้ยงและแบรนด์ kapoamom]\n\n✨ ${siteConfig.catering.title}\n📌 จุดเด่น: ${siteConfig.catering.highlights.join(", ")}\n\n🛍️ ซอสกะเพราสูตรลับ 9 ปี:\nดูรายละเอียด: ${siteConfig.identity.url}/kapoamom\n\n📞 ปรึกษาธุรกิจ: ${siteConfig.contact.phone}`,
                quickReply: quickReplyItems
              }
            ];
            return client.replyMessage(event.replyToken, messages);
          } else if (userMessage.includes("คุย") || userMessage === "5") {
            replyText = `[💬 ติดต่อเจ้าของร้านโดยตรง]\n\nหากท่านมีข้อสงสัยหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถพิมพ์ข้อความทิ้งไว้ที่นี่ได้เลยครับ\n\nเฮียเนก หรือ เจ๊ตั๊ก จะรีบเข้ามาตอบกลับด้วยตัวเองโดยเร็วที่สุดครับ 🙏`;
          } else if (userMessage === "0" || userMessage.includes("สวัสดี")) {
            const greeting = userId === ADMIN_USER_ID ? "สวัสดีครับ นายท่านอลงกรณ์" : `สวัสดีครับ ยินดีต้อนรับสู่ ${siteConfig.identity.name}`;
            replyText = `${greeting}\nตำนานบะหมี่ไข่ 98% เมืองตากที่เปิดให้บริการมาแล้วกว่า 9 ปี\n\nท่านต้องการให้ผมช่วยข้อมูลส่วนไหนดีครับ? เลือกกดที่ "ปุ่มเมนู" ด้านล่างได้เลยครับ 👇`;
          } else {
            replyText = `ขออภัยครับ ระบบไม่เข้าใจคำสั่งนี้ 🙏\n\nกรุณาเลือกกดปุ่มเมนูที่แถบด้านล่าง เพื่อรับข้อมูลที่ต้องการได้ทันทีครับ 👇`;
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
