# Sticker Drop 📱

> Uma solução automatizada em TypeScript para extração de mídias do TikTok e conversão direta em figurinhas (stickers) para o WhatsApp.

## 📌 Contexto e Motivação

Este projeto originou-se de uma necessidade pessoal recorrente: a demanda por otimizar o fluxo de compartilhamento de conteúdos do TikTok diretamente para conversas do WhatsApp no formato de figurinhas. Diante disso, esta ferramenta foi desenvolvida com o propósito de mitigar tal atrito, unificando o processo de aquisição, processamento de imagem/vídeo e disparo automatizado em uma única interface coesa e eficiente.

## 🛠️ Tecnologias e Dependências Utilizadas

O ecossistema do projeto é construído sobre as seguintes tecnologias e pacotes:

### Core & Runtime
* [**TypeScript**](https://www.typescriptlang.org/) — Superset JavaScript tipado estaticamente.
* [**Node.js**](https://nodejs.org/) — Ambiente de execução JavaScript/TypeScript no lado do servidor.
* [**Express**](https://expressjs.com/) — Framework web minimalista e flexível para Node.js.

### Integração, Comunicação e Processamento
* [**zocialomment.com API**](https://zocialcomment.com/tools/tiktok-stickers-download) — API utilizada para o scrapping das mídias do TikTok.
* [**whatsapp-web.js**](https://wwebjs.dev/) — Cliente wrapper do WhatsApp Web baseado no Puppeteer para automação de mensagens e envio de mídias.
* [**Puppeteer**](https://pptr.dev/) — Biblioteca para controle do navegador headless (subjacente ao `whatsapp-web.js`).
* [**Axios**](https://axios-http.com/) — Cliente HTTP baseado em promessas para requisições a APIs externas e obtenção de mídias.
* [**qrcode-terminal**](https://www.npmjs.com/package/qrcode-terminal) — Utilitário para renderização do QR Code de autenticação diretamente na interface do terminal.

### Utilitários e Desenvolvimento
* [**dotenv**](https://www.npmjs.com/package/dotenv) — Gerenciamento de variáveis de ambiente.
* [**ts-node-dev**](https://www.npmjs.com/package/ts-node-dev) — Inicializador de servidor com reinicialização automática para ambiente de desenvolvimento.
* **pnpm** — Gerenciador de pacotes performático.

## 📂 Estrutura do Projeto

```text
tiktok-sticker-bot/  {
            "id": "76959965136473    6",
            "type": "photo",
"url": "https://p19-comment-sign-sg.tiktokcdn.com/tos-alisg-i-zt8igodiya-sg/2d414b9c04474cd891504830443328c4~tplv-jj85edgx6n-image-origin.jpeg?dr=8569&refresh_token=0c750800&x-expires=1794610&x-signature=Hoif5jtrXwGZsohDZJs5xYPpDNM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=my"
        },├── src
/  {    "i   "7695996513647313716",
"type": "photo",
"url": "https://p19-comment-sign-sg.tiktokcdn.com/tos-alisg-i-zt8igodiya-sg/2d414b9c04474cd891504830443328c4~tplv-jj85edgx6n-image-origin.jpeg?dr=8569&refresh_token=0c750800&x-expires=1794610800&x-signature=Hoif5jtrXwGZsohDZJs5xYPpDNM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=my"
  ,│   │   └── whatsapp
.ts     # Instanciação e eventos do WhatsApp Web  {
            "id": "7695996513647313716",    "type": "photo",
            "url": "https://p19-comment-s-sg.tiktokcdn.com/tos-alisg-i-zt8igodiya-sg/2d414b9c04474cd891504830443328c4~tplv-jj85edgx6n-image-origin.jpeg?dr=8569&refresh_token=0c750800&x-expires=1794610800&x-signature=Hoif5jtrXwGZsohDZJs5xYPM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=my"
        },│   │   └── sticker.contr
oller.ts  {    "id": "7695996513647313716",
   "e": "photo",
            l": "https://p19-comment-sign-sg.tiktokcdn.com/tos-alisg-i-zt8igodiya-sg/2d414b9c04474cd891504830443328c4~tplv-jj85edgx6n-image-origin.jpeg?dr=8569&refresh_token=0c750800&x-expires=1794610800&x-signature=Hoif5jtrXwGZsohDZJs5xYPpDNM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=my"
        },   │   └── sticker.
route.ts  {    "id": "7695996513647313716",
            "e": "photo",
            l": "https://p19-comment-sign-sg.tiktokcdn.com/tos-alisg-i-zt8igodiya-sg/2d414b9c04474cd891504830443328c4~tplv-jj85edgx6n-image-origin.jpeg?dr=8569&refresh_token=0c750800&x-expires=1794610800&x-signature=Hoif5jtrXwGZsohDZJs5xYPpDNM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=my"
        },   │   ├── tiktok.ser
vice.ts
│   │   └── whatsapp.service.ts  {
            "id": "76959965136473    6",
            "type": "photo",
"url": "https://p19-comment-sign-sg.tiktokcdn.com/tos-alisg-i-zt8igodiya-sg/2d414b9c04474cd891504830443328c4~tplv-jj85edgx6n-image-origin.jpeg?dr=8569&refresh_token=0c750800&x-expires=1794610&x-signature=Hoif5jtrXwGZsohDZJs5xYPpDNM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=my"
        },  `

## 🚀 Como Executar o Projeto

### Pré-requisitos
* **Node.js** (Versão 18.x ou superior)
* **pnpm** (`npm install -g pnpm`)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/tiktok-sticker-bot.git
   cd sticker-drop
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto com base nas suas preferências:
   ```env
   PORT=3000
   ```

4. **Inicie o ambiente de desenvolvimento:**
   ```bash
   pnpm run dev
   ```

*(Nota: Na primeira execução com o `whatsapp-web.js` e o `qrcode-terminal`, o QR Code será exibido diretamente no seu terminal para autenticação da sua conta do WhatsApp via sessão web).*

## 📡 Documentação da API

Abaixo encontram-se especificados os endpoints expostos pela API sob o prefixo `/sticker`.

### 1. Gerar Figurinha (`POST /sticker/generate`)
Realiza a varredura e o download da mídia associada à URL do TikTok fornecida, processando-a internamente para o formato compatível com figurinhas.

* **URL:** `/api/sticker/generate`
* **Método HTTP:** `POST`
* **Headers:** `Content-Type: application/json`

#### Corpo da Requisição (JSON)
```json
{
  "videoUrl": "https://www.tiktok.com/@username/video/7234567890123456789"
}
```

#### Respostas
* **`200 OK` — Sucesso na geração**
  ```json
  {
    "message": "Stickers gerados com sucesso.",
    "data": [
      {
        "id": "7695996513647313716",
        "type": "photo",
        "url": "https://p19-comment-sign-sg.tiktokcdn.com/example"
      },
    ]
  }
  ```
* **`400 Bad Request` — Parâmetro ausente ou inválido**
  ```json
  {
    "error": "Link do vídeo é obrigatório."
  }
  ```
* **`500 Internal Server Error` — Falha no processamento**
  ```json
  {
    "error": "Erro interno do servidor."
  }
  ```

---

### 2. Enviar Figurinha (`POST /sticker/send`)
Executa o fluxo completo: processa a mídia informada via link do TikTok e dispara a figurinha diretamente para o chat do destinatário especificado no WhatsApp.

* **URL:** `/api/sticker/send`
* **Método HTTP:** `POST`
* **Headers:** `Content-Type: application/json`

#### Corpo da Requisição (JSON)
```json
{
  "imgUrl": "https://www.tiktok.com/@username/video/7234567890123456789",
  "number": "+5511999999999"
}
```
> *Observação: O campo `number` deve conter o DDI e o DDD integrados, estritamente numéricos.*

#### Respostas
* **`200 OK` — Sucesso no envio**
  ```json
  {
    "message": "Sticker enviado com sucesso."
  }
  ```
* **`400 Bad Request` — Dados incompletos**
  ```json
  {
    "error": "Número e link da imagem são obrigatórios."
  }
  ```
* **`500 Internal Server Error` — Falha na conexão ou envio**
  ```json
  {
    "error": "Erro interno do servidor."
  }
  ```

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.
