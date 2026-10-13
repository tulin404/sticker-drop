import { MessageMedia } from "whatsapp-web.js";
import { client, isWhatsAppReady } from "../config/whatsapp";

export async function sendSticker({
    number,
    imageUrl,
}: {
    number: string,
    imageUrl: string,
}): Promise<void> {
    if (!isWhatsAppReady()) {
        throw new Error('WhatsApp não está conectado.');
    };

    const chatId = `${number.replace(/\D/g, '')}@c.us`;

    const media = await MessageMedia.fromUrl(imageUrl);

    await client.sendMessage(chatId, media, {
        sendMediaAsSticker: true,
        stickerName: "TikTok Sticker",
        stickerAuthor: "tiktok-sticker-bot",
    });
};
