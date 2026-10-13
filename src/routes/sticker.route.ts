import { Router } from "express";
import { sendStickerController } from "../controllers/sticker.controller";

export const stickerRouter = Router();

stickerRouter.post("/send", sendStickerController);
