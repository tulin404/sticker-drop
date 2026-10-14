import express from "express";
import { stickerRouter } from "./routes/sticker.route";

export const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use((req, _, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.use("/api/sticker", stickerRouter);
