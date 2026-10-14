import type { Request, Response } from "express";
import { getTikTokStickers } from "../services/tiktok.service";
import { sendSticker } from "../services/whatsapp.service";

export class StickerController {

    static async generate(req: Request, res: Response) {
        try {
            const { videoUrl } = req.body;

            if (!videoUrl) {
                return res.status(400).json({
                    error: "Link do vídeo é obrigatório.",
                });
            };

            const stickers = await getTikTokStickers(videoUrl);

            return res.status(200).json({
                message: "Stickers gerados com sucesso.",
                stickers,
            });
        } catch (error) {
            console.error(`Erro ao gerar figurinhas: ${error}`);

            return res.status(500).json({
                error: error instanceof Error ? error.message : "Erro interno do servidor.",
            });
        };
    };

    static async send(req: Request, res: Response) {
        try {
            const { number, imgUrl } = req.body;

            if (!number || !imgUrl) {
                return res.status(400).json({
                    error: "Número e link da imagem são obrigatórios.",
                });
            };

            await sendSticker({ number, imgUrl });

            res.status(200).json({
                message: "Figurinha enviada com sucesso.",
            });
        } catch (error) {
            console.error(`Erro ao enviar figurinha: ${error}`);

            return res.status(500).json({
                error: error instanceof Error ? error.message : "Erro interno do servidor.",
            });
        };
    };
};
