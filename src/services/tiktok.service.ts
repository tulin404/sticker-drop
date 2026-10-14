import axios from "axios";

export async function getTikTokStickers(videoUrl: string): Promise<string> {
    const response = await axios.post(
        "https://zocialcomment.com/api/stickers/scan",
        {
            url: videoUrl,
        },
        {
            timeout: 30000,
        },
    );

    const data = response.data?.data.pictures;
    if (data.lenght === 0) {
        throw new Error("Não foi possível encontrar imagens.");
    };

    console.log(data);

    return data;
};
