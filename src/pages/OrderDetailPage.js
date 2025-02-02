import axios from "axios";
import useSWR from "swr";
import PageSpinner from "../components/ui/pageSpinner";
import { GET_PRODUCT_DETAIL_API } from "../requests/requestConfig";
import { Avatar, Box, Button, Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";

const dummyOrder = {
    "booking_time": "Sat, 12 Oct 2024",
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
    "purchased_date": "Sun, 13 Oct 2024",
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
}

export default function GetOrderDetailPage() {
    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error } = useSWR(GET_PRODUCT_DETAIL_API, fetcher);

    // if (!data) return <PageSpinner />
    // if (error) return "error"

    // const orderData = data.data;
    // console.log(orderData);

    const navigate = useNavigate();

    const order = dummyOrder;

    return (
        <Box p={3} className="min-h-screen bg-gradient-to-r from-violet-950 to-black">
            <Card className="my-5 opacity-80">
                <CardContent>
                    <Box className='flex'>
                        <Button disableRipple variant="text" onClick={() => navigate(`/product/${order.product.product_id}`)}>
                            <Typography variant="h4">
                                {order.product.title}
                            </Typography>
                        </Button>

                        <Box className='ml-auto'>
                            <Typography align="right" sx={{fontWeight: 'bold'}}>
                                Purchased date 
                            </Typography>

                            <Typography align="right">{order.purchased_date}</Typography>
                        </Box>
                    </Box>
                    
                    <Divider />

                    <Box className='flex'>
                        <Box className='py-5 pl-5'>
                            <Typography variant="body1" sx={{fontWeight: 'bold', marginTop: 1}}>
                                Purchased date
                            </Typography>

                            <Typography>
                                {order.purchased_date}
                            </Typography>

                            <Typography variant="body1" sx={{fontWeight: 'bold', marginTop: 1}}>
                                Price
                            </Typography>

                            <Typography>
                                {order.product.price} AUD
                            </Typography>

                            <Typography variant="body1" sx={{fontWeight: 'bold', marginTop: 1}}>
                                Booking time
                            </Typography>

                            <Typography>
                                {order.booking_time}
                            </Typography>
                        </Box>

                        <Box className='py-5 pr-5 ml-auto flex flex-col justify-end' >
                            <Box className='pt-2 flex justify-end'>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/broken-image.jpg"
                                    
                                    sx={{ width: 100, height: 100 }}
                                />
                            </Box>

                            <Box className='pt-2 flex justify-end'>
                                <Typography>
                                    {order.seller.first_name}  {order.seller.last_name}
                                </Typography>
                            </Box>

                            <Box className='flex'>
                                <MailIcon />
                                <Typography className="pl-2">
                                    {order.seller.email} 
                                </Typography>      
                            </Box>
                        </Box>
                    </Box>

                    <Box className='pl-5'>
                        <Typography variant="text-left" sx={{fontWeight:'bold', marginTop: 1}}>
                            Meetup location
                        </Typography>

                        <Typography>
                            {order.meetup_location}
                        </Typography>
                    </Box>

                    
                    {/* <Typography variant="h5">
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
                    </Button> */}
                </CardContent>
            </Card>
        </Box>
    )
}