import axios from "axios";
import useSWR from "swr";
import PageSpinner from "../components/ui/pageSpinner";
import { GET_PRODUCT_DETAIL_API } from "../requests/requestConfig";

const dummyProduct = {
    "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
    "description": "description",
    "photo_urls": null,
    "price": 0.0,
    "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
    "product_type": "service",
    "title": "title1",
    "video_urls": [
        "test1",
        "test2"
    ]
}

export default function GetProductDetailPage() {
    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error } = useSWR(GET_PRODUCT_DETAIL_API, fetcher);

    // if (!data) return <PageSpinner />
    // if (error) return "error"

    // const productData = data.data;
    // console.log(productData);

    return (
        
        <div>GetProductDetailPage</div>
    )
}