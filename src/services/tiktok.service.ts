import axios from "axios";

export async function getTikTokImage(linkTiktok: string): Promise<string> {
    const response = await axios.get(
        "https://www.tikwm.com/api/",
        {
            params: {
                url: linkTiktok,
            },
            timeout: 15000,
        },
    );

    const data = response.data?.data;
    const imageUrl = data?.cover || data?.avatar;

    if (!imageUrl) {
        throw new Error("Não foi possível encontrar uma imagem.");
    };

    return imageUrl;
};
