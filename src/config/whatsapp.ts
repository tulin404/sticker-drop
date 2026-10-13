import qrcode from "qrcode-terminal";
import whatsapp from 'whatsapp-web.js';

const { Client, LocalAuth } = whatsapp;

// CONFIG

export const client = new Client({
    authStrategy: new LocalAuth(),
});

let isReady = false;

// UTILS

export function initializeWhatsApp() {
    client.initialize();
};

export function isWhatsAppReady() {
    return isReady;
};

// LISTENERS

client.on("qr", (qr: string) => {
    qrcode.generate(qr, { small: true });
    console.log("Escaneie o QR Code com seu WhatsApp.");
});

client.on("ready", () => {
    isReady = true;
    console.log("WhatsApp conectado e pronto.");
});

client.on("auth_failure", (message: string) => {
    isReady = false;
    console.error("Falha na autenticação: ", message);
});

client.on("disconnected", (reason: string) => {
    isReady = false;
    console.log("WhatsApp desconectado: ", reason);
});
