import axios from "axios";
import useSWR from "swr";
import PageSpinner from "../components/ui/pageSpinner";
import { GET_PRODUCT_DETAIL_API } from "../requests/requestConfig";

const dummyOrder = {
    "booking_time": "Sat, 12 Oct 2024 15:00:00 GMT",
    "buyer_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
    "meetup_location": "test",
    "order_id": "d8e50581-8366-49d3-aeb0-4fc711e939c7",
    "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
    "purchased_date": "Sun, 13 Oct 2024 07:50:13 GMT",
    "seller_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037"
}

export default function GetOrderDetailPage() {
    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error } = useSWR(GET_PRODUCT_DETAIL_API, fetcher);

    // if (!data) return <PageSpinner />
    // if (error) return "error"

    // const orderData = data.data;
    // console.log(orderData);

    return (
        
        <div>GetOrderDetailPage</div>
    )
}