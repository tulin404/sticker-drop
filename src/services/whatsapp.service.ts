import whatsapp from "whatsapp-web.js";
import { client, isWhatsAppReady } from "../config/whatsapp";
import { Sticker, StickerTypes } from "wa-sticker-formatter";

const { MessageMedia } = whatsapp;

export async function sendSticker({
    number,
    imgUrl,
}: {
    number: string,
    imgUrl: string,
}) {
    if (!isWhatsAppReady()) {
        throw new Error("WhatsApp não está conectado.");
    };

    const chatId = `${number.replace(/\D/g, "")}@c.us`;

    const sticker = new Sticker(imgUrl, {
        pack: "TikTok Sticker",
        author: "sticker-dropper",
        type: StickerTypes.DEFAULT,
        quality: 65,
    });

    const buffer = await sticker.toBuffer();

    const media = new MessageMedia(
        "image/webp",
        buffer.toString("base64"),
        "sticker.webp",
    );

    await client.sendMessage(chatId, media, {
        sendMediaAsSticker: true,
    });
};
