import type { Request, Response } from "express";
import { getTikTokImage } from "../services/tiktok.service";
import { sendSticker } from "../services/whatsapp.service";

export async function sendStickerController(req: Request, res: Response) {
    try {
        const { number, linkTiktok } = req.body;

        if (!number || !linkTiktok) {
            res.status(400).json({
                error: "Número e link do TikTok são obrigatórios.",
            });
            return;
        };

        const imageUrl = await getTikTokImage(linkTiktok);

        await sendSticker({ number, imageUrl });

        res.status(200).json({
            message: "Figurinha enviada com sucesso.",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: error instanceof Error ? error.message : "Erro interno do servidor.",
        });
    };
};
