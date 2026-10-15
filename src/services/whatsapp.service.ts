import whatsapp from "whatsapp-web.js";
import axios from "axios";
import { client, isWhatsAppReady } from "../config/whatsapp";
import sharp from "sharp";

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

    const response = await axios.get(imgUrl, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(response.data);

    const optimizedWebpBuffer = await sharp(imageBuffer)
        .resize(512, 512, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .webp({ quality: 75 })
        .toBuffer();

    const media = new MessageMedia(
        "image/webp",
        optimizedWebpBuffer.toString("base64"),
        "sticker.webp",
    );

    await client.sendMessage(chatId, media, {
        sendMediaAsSticker: true,
        stickerName: "TikTok Sticker",
        stickerAuthor: "tiktok-sticker-bot",
    });
};
