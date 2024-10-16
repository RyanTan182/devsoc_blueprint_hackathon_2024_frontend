import { GET_ACCOUNT_API } from "../requests/requestConfig";
import useSWR from "swr";
import axios from "axios";
import PageSpinner from "../components/ui/pageSpinner";
import { Box, Typography } from "@mui/material";


export default function AboutUsPage() {
    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error, isValidating } = useSWR(GET_ACCOUNT_API, fetcher, { refreshInterval: 1000 });

    // if (!data) return <PageSpinner />
    // if (error) return "error"

    // const resData = data.data;
    // const user = {
    //     username: resData.username,
    //     email: resData.email,
    //     payId: resData.payId
    // }

    // console.log(resData);

    return (
        <Box className='min-h-screen bg-gradient-to-r from-violet-950 to-black pb-20'>
            <Typography variant="h5" className="text-white p-10">
                About us
            </Typography>

            <Box className='text-gray-200 mx-10 px-10 py-5' sx={{borderRadius: 2}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat laoreet molestie. Aenean metus tortor, bibendum a nisi a, semper feugiat felis. Vestibulum tincidunt porta dui, et mollis ex. Suspendisse ut felis sapien. Praesent gravida augue neque, nec vehicula sem tincidunt ac. Aenean et suscipit lorem. Maecenas tincidunt rutrum sollicitudin. Vivamus ligula metus, laoreet quis facilisis eu, auctor in nunc. Curabitur finibus augue nulla, a porttitor ipsum pretium nec. Morbi accumsan venenatis augue quis viverra.

                In id metus tristique arcu laoreet aliquet vitae commodo turpis. Nullam consectetur vitae nulla ut bibendum. Vivamus nec cursus lorem, sit amet egestas urna. Sed volutpat magna luctus, aliquet nisl sed, facilisis erat. Curabitur nec orci luctus, sodales tortor vel, dignissim justo. Donec eu auctor quam. Fusce laoreet imperdiet risus a porttitor. Nam porttitor diam non orci suscipit, in venenatis elit sodales.

                Fusce a interdum nunc. Etiam pulvinar id turpis vel semper. Sed porttitor in nisl quis fermentum. Suspendisse sit amet ultrices ante. Quisque velit ante, pharetra ac lorem eget, ultrices porta lacus. Sed sit amet luctus metus. Curabitur semper mauris sem, quis pharetra dolor finibus sit amet. Aenean sapien velit, finibus nec vulputate non, viverra sed sapien. Duis vestibulum in risus vel tempor. Fusce ultrices magna vel neque ullamcorper egestas. Nunc blandit sollicitudin arcu, et consectetur tellus tempus a. Vestibulum in finibus enim.

                Aliquam eget cursus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam magna sem, tincidunt vitae ullamcorper et, molestie eu erat. Suspendisse pulvinar a eros et dapibus. Vestibulum luctus massa vitae velit pretium tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc scelerisque pretium dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id metus dui. Curabitur sodales libero interdum, vehicula nisl in, porta mi. Vestibulum sollicitudin risus nec velit elementum fermentum. Pellentesque condimentum leo at libero ullamcorper dictum. Donec non fermentum est.

                Cras eu enim risus. Fusce sed neque ut felis tincidunt congue. Nulla nec magna vel massa facilisis lobortis feugiat eu arcu. Proin in dui sem. Fusce sed nisi eget dui condimentum pulvinar. Nunc bibendum dignissim quam, eget fringilla purus elementum ut. Ut vestibulum nulla ac velit dignissim faucibus. In fermentum leo eu tristique convallis. Etiam posuere vestibulum elit. Praesent vitae risus at mauris lobortis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </Box>

        </Box>
    )
}