import whatsapp from "whatsapp-web.js";
import { client, isWhatsAppReady } from "../config/whatsapp";

const { MessageMedia } = whatsapp;

export async function sendSticker({
    number,
    imageUrl,
}: {
    number: string,
    imageUrl: string,
}) {
    if (!isWhatsAppReady()) {
        throw new Error('WhatsApp não está conectado.');
    };

    const chatId = `${number.replace(/\D/g, "")}@c.us`;

    const media = await MessageMedia.fromUrl(imageUrl);

    await client.sendMessage(chatId, media, {
        sendMediaAsSticker: true,
        stickerName: "TikTok Sticker",
        stickerAuthor: "tiktok-sticker-bot",
    });
};
