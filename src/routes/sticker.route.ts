import { Router } from "express";
import { StickerController } from "../controllers/sticker.controller";

export const stickerRouter = Router();

stickerRouter.post("/generate", StickerController.generate);
stickerRouter.post("/send", StickerController.send);
