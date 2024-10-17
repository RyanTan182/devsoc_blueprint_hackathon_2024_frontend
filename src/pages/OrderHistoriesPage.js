import axios from "axios";
import useSWR from "swr";
import PageSpinner from "../components/ui/pageSpinner";
import { GET_ALL_ORDERS_API } from "../requests/requestConfig";
import { useSelector } from "react-redux";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import OrderHistoryInfo from "../components/common/order/orderHistoryInfo";
import OrderPanelList from "../components/common/order/orderPanelList";

const dummyOrders = {
    "limit": 10,
    "orders": [
        {
            "booking_time": "Sat, 12 Oct 2024 15:00:00 ",
            "buyer_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "meetup_location": "TBD",
            "order_id": "f498b5e3-2c18-43c0-ba5d-4b8ba2032da9",
            "product": {
                "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
                "description": "description",
                "photo_urls": null,
                "price": 45.0,
                "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
                "product_type": "service",
                "title": "Piano lesson",
                "video_urls": [
                    "test1",
                    "test2"
                ]
            },
            "purchased_date": "Sun, 13 Oct 2024 07:48:12",
            "seller": {
                "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
                "email": "meganfox@gmail.com",
                "first_name": "Megan",
                "last_name": "Fox",
                "pay_id": "123123242",
                "profile_picture_url": "test1",
                "social_media_links": "test1",
                "username": "test1",
                "zid": "test1"
            },
        },
        {
            "booking_time": "Sat, 12 Oct 2024 15:00:00",
            "buyer_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "meetup_location": "TBD",
            "order_id": "d8e50581-8366-49d3-aeb0-4fc711e939c7",
            "product": {
                "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
                "description": "description",
                "photo_urls": null,
                "price": 12.0,
                "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
                "product_type": "service",
                "title": "Survive from UNSW Exam",
                "video_urls": [
                    "test1",
                    "test2"
                ]
            },
            "purchased_date": "Sat, 12 Oct 2024 07:50:13 ",
            "seller_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037"
        },
        {
            "booking_time": "Sat, 12 Oct 2024 15:00:00 ",
            "buyer_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "meetup_location": "TBD",
            "order_id": "739838bb-df5c-4406-9947-3406cf4f3e67",
            "product": {
                "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
                "description": "description",
                "photo_urls": null,
                "price": 0.0,
                "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
                "product_type": "service",
                "title": "Web developer",
                "video_urls": [
                    "test1",
                    "test2"
                ]
            },
            "purchased_date": "Fri, 11 Oct 2024 07:51:46 GMT",
            "seller_account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037"
        }
    ],
    "page": 1
}

export default function GetOrderHistoriesPage() {
    const navigate = useNavigate();
    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error } = useSWR(GET_ALL_ORDERS_API, fetcher);

    // if (!data) return <PageSpinner />
    // if (error) return "error"

    // const ordersData = data.data;
    // console.log(ordersData);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const orders = dummyOrders.orders;
    console.log(orders)

    return (
        <Box p={3} className="min-h-screen bg-gradient-to-r from-violet-950 to-black">
            {/* {isAuthenticated ? 
                (<OrderPanelList orders = {dummyOrders}/>) :
                navigate("/login")
            } */}

            {orders.map(order => 
                <Card className="my-5 opacity-80">
                    <CardContent>
                        <Typography variant="h5">
                            {order.product.title}
                        </Typography>
                        
                        <Divider />

                        <Box className='p-5'>
                            <Typography variant="body1" sx={{fontWeight: 'bold', marginTop: 1}}>
                                Purchased date
                            </Typography>

                            <Typography>
                                {order.purchased_date}
                            </Typography>

                            <Typography variant="body1" sx={{fontWeight: 'bold', marginTop: 1}}>
                                Meetup location
                            </Typography>

                            <Typography>
                                {order.meetup_location}
                            </Typography>

                            <Typography sx={{ marginTop: 1}}>
                                {order.product.price} AUD
                            </Typography>
                        </Box>

                        <Button onClick={() =>  navigate(`/order/${order.order_id}`)}>
                            Details
                        </Button>
                    </CardContent>
                </Card>
            )}   
        </Box>
    )

}