import axios from "axios";
import useSWR from "swr";
import PageSpinner from "../components/ui/pageSpinner";
import { GET_PRODUCT_DETAIL_API } from "../requests/requestConfig";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const dummyProduct = {
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
}

export default function GetProductDetailPage() {
    const navigate = useNavigate();
    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error } = useSWR(GET_PRODUCT_DETAIL_API, fetcher);

    // if (!data) return <PageSpinner />
    // if (error) return "error"

    // const productData = data.data;
    const product = dummyProduct;
    // console.log(productData);

    return (
        <Box className='min-h-screen bg-gradient-to-r from-violet-950 to-black p-20'>
            <Box className='bg-white opacity-80 p-10' sx={{borderRadius: 5}}>
                <Typography variant="h6" className="text-black">
                    {product.title}
                </Typography>

                <Divider />

                <Box className='my-5'>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat laoreet molestie. Aenean metus tortor, bibendum a nisi a, semper feugiat felis. Vestibulum tincidunt porta dui, et mollis ex. Suspendisse ut felis sapien. Praesent gravida augue neque, nec vehicula sem tincidunt ac. Aenean et suscipit lorem. Maecenas tincidunt rutrum sollicitudin. Vivamus ligula metus, laoreet quis facilisis eu, auctor in nunc. Curabitur finibus augue nulla, a porttitor ipsum pretium nec. Morbi accumsan venenatis augue quis viverra.
                    </Typography>

                    <Typography>
                        In id metus tristique arcu laoreet aliquet vitae commodo turpis. Nullam consectetur vitae nulla ut bibendum. Vivamus nec cursus lorem, sit amet egestas urna. Sed volutpat magna luctus, aliquet nisl sed, facilisis erat. Curabitur nec orci luctus, sodales tortor vel, dignissim justo. Donec eu auctor quam. Fusce laoreet imperdiet risus a porttitor. Nam porttitor diam non orci suscipit, in venenatis elit sodales.
                    </Typography>
                </Box>

                <Box className='my-5'>
                    <Typography variant="h5">
                        Experience
                    </Typography>

                    <Divider />

                    <Box className='p-2'>
                        <Typography variant="body1" sx={{fontWeight:'bold'}}>
                            Lead performer, 01/02/2021 - Present
                        </Typography>

                        <Typography>
                            In id metus tristique arcu laoreet aliquet vitae commodo turpis. Nullam consectetur vitae nulla ut bibendum. Vivamus nec cursus lorem, sit amet egestas urna. Sed volutpat magna luctus, aliquet nisl sed, facilisis erat. Curabitur nec orci luctus, sodales tortor vel, dignissim justo. Donec eu auctor quam. Fusce laoreet imperdiet risus a porttitor. Nam porttitor diam non orci suscipit, in venenatis elit sodales.
                        </Typography>
                    </Box>

                    <Box className='p-2'>
                        <Typography variant="body1" sx={{fontWeight:'bold'}}>
                            Teacher, 01/02/2009 - 31/02/2021
                        </Typography>

                        <Typography>
                            In id metus tristique arcu laoreet aliquet vitae commodo turpis. Nullam consectetur vitae nulla ut bibendum. Vivamus nec cursus lorem, sit amet egestas urna. Sed volutpat magna luctus, aliquet nisl sed, facilisis erat. Curabitur nec orci luctus, sodales tortor vel, dignissim justo. Donec eu auctor quam. Fusce laoreet imperdiet risus a porttitor. Nam porttitor diam non orci suscipit, in venenatis elit sodales.
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography sx={{fontWeight: 'bold'}}>
                        Price
                    </Typography>

                    <Typography>
                        {product.price} AUD per hour
                    </Typography>
                </Box>


                <Box className='py-5'>
                    <Button variant="contained" size="small" onClick={() => navigate('/order')}>
                        Purchase
                    </Button>
                </Box>

                <Divider />

                <Box className='pt-5'>
                    <Box className='text-center'>
                        <Typography variant="title1" sx={{fontWeight: 'bold'}}>
                            More info
                        </Typography>
                    </Box>

                    <Box className='pb-5 pr-5 ml-auto'>
                        <Box className='pt-2 flex'>
                            <Avatar
                                alt="Remy Sharp"
                                src="/megan_fox.jpg"
                                sx={{ width: 100, height: 100 }}
                            />
                        </Box>

                        <Box className='pt-7'>
                            <Typography>
                                {product.seller.first_name}  {product.seller.last_name}
                            </Typography>
                        </Box>

                        <Box className='flex'>
                            <MailIcon />
                            <Typography className="pl-2">
                                {product.seller.email} 
                            </Typography>      
                        </Box>

                        <Box className='pt-2'>
                            <Typography sx={{fontWeight: 'bold'}}>
                                Pay ID
                            </Typography>   

                            <Typography>
                                {product.seller.pay_id} 
                            </Typography>   
                        </Box>
                    </Box>

                    <Stack direction={'row'} spacing={2} className='flex'>
                        <YouTubeIcon />
                        <GitHubIcon />
                        <LinkedInIcon />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}