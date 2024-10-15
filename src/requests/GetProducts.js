import { REQUEST_URL } from "./requestConfig";

export const GetProducts = async (page, limit) => {
    const response = await fetch(`${REQUEST_URL}/products?page=${page}&limit=${limit}`).then(res => res.json());

    const data = response.data.map((res) => { return {
        "account_id": res.account_id,
        "description": res.description,
        "photo_urls": res.photo_urls,
        "price": res.price,
        "product_id": res.product_id,
        "product_type": res.product_type,
        "title": res.title,
        "video_urls": res.video_urls,
        "created_time": res.created_time,
    }});

    const totalPage = response.totalPage ? Number(response.totalPage) : 1;

    return {data: data.sort((d1, d2) => d2.created_time -d1.created_time), totalPage: totalPage}
}