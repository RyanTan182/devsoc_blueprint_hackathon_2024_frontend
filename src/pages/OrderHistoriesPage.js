import axios from "axios";
import useSWR from "swr";
import PageSpinner from "../components/ui/pageSpinner";
import { GET_ALL_ORDERS_API } from "../requests/requestConfig";

const dummyOrders = {
    "limit": 10,
    "orders": [
        {
            "booking_time": "Sat, 12 Oct 2024 15:00:00 GMT",
            "buyer_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "meetup_location": "test",
            "order_id": "f498b5e3-2c18-43c0-ba5d-4b8ba2032da9",
            "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
            "purchased_date": "Sun, 13 Oct 2024 07:48:12 GMT",
            "seller_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037"
        },
        {
            "booking_time": "Sat, 12 Oct 2024 15:00:00 GMT",
            "buyer_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "meetup_location": "test",
            "order_id": "d8e50581-8366-49d3-aeb0-4fc711e939c7",
            "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
            "purchased_date": "Sun, 13 Oct 2024 07:50:13 GMT",
            "seller_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037"
        },
        {
            "booking_time": "Sat, 12 Oct 2024 15:00:00 GMT",
            "buyer_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "meetup_location": "test",
            "order_id": "739838bb-df5c-4406-9947-3406cf4f3e67",
            "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
            "purchased_date": "Sun, 13 Oct 2024 07:51:46 GMT",
            "seller_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037"
        }
    ],
    "page": 1
}

export default function GetOrderHistoriesPage() {
    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error } = useSWR(GET_ALL_ORDERS_API, fetcher);

    // if (!data) return <PageSpinner />
    // if (error) return "error"

    // const ordersData = data.data;
    // console.log(ordersData);



    return (
        
        <div>GetOrderHistoriesPage</div>
    )
}