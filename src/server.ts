import 'dotenv/config';
import { app } from './app';
import { initializeWhatsApp } from './config/whatsapp';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
    await initializeWhatsApp();

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
};

bootstrap();
