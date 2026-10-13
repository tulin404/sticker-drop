
import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client({
    authStrategy: new LocalAuth(),
});

let isReady = false;

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

function initializeWhatsApp(): void {
    client.initialize();
};

function isWhatsAppReady(): boolean {
    return isReady;
};

export {
    client,
    initializeWhatsApp,
    isWhatsAppReady,
};
