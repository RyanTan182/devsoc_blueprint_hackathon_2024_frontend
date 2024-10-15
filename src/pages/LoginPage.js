import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { authActions } from '../store/authSlice';
import { userActions } from '../store/userSlice';

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

export default function LoginPage() { 
    const dispatch = useDispatch();

    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const navigate = useNavigate();

    const handleSubmitLoginForm = async (values, actions) => {
        actions.setSubmitting(false);
        setIsSubmitting(true);

        try {
            const res = await axios.post(process.env.LOGIN_API, values);
            
            const { user, defaultAddress, defaultCreditCard, totalAmount } = res.data.data;

            dispatch(authActions.login());

            dispatch(userActions.setUser({
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                amazonPoints: user.amazonPoints,
                defaultAddress,
                defaultCreditCard
            }));


            // dispatch(snackbarActions.setSnackbarState({
            //     open: true , 
            //     type: "success", 
            //     message: "Successfully logged in."
            // }));

            navigate(-1);

        } catch(err) {
            // dispatch(snackbarActions.setSnackbarState({
            //     open: true , 
            //     type: "error", 
            //     message: err?.response?.data?.message ? err.response.data.message : "Oops... Something went wrong"
            // }));

            setIsSubmitting(false);
        }
    };

    return(
        <div>Login Page</div>
    );
}