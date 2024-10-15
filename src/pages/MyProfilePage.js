import { GET_ACCOUNT_API } from "../requests/requestConfig";
import useSWR from "swr";
import axios from "axios";
import PageSpinner from "../components/ui/pageSpinner";

const dummyUser = {
    "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
    "email": "test1",
    "first_name": "test1",
    "last_name": "test1",
    "pay_id": "test1",
    "profile_picture_url": "test1",
    "social_media_links": "test1",
    "username": "test1",
    "zid": "test1"
}

export default function MyProfilePage() {
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
        <div>MyProfilePage</div>
    )
}