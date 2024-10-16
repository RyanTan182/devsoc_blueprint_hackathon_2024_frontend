import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { authActions } from '../store/authSlice';
import { userActions } from '../store/userSlice';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { EMAIL_SCHEMA, PASSWORD_SCHEMA } from '../components/forms/form-schema';
import FormikEmail from '../components/forms/formik-email';
import FormikPassword from '../components/forms/formik-password';
import FormikSubmitButton from '../components/forms/formik-submit-button';
import { LOGIN_API } from '../requests/requestConfig';

const LOGIN_FORM_INITIAL_STATE = {
    username: "",
    password: ""
};

const LOGIN_FORM_VALIDATION = Yup.object().shape({
    password: PASSWORD_SCHEMA
});

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
    const navigate = useNavigate();

    const [ isSubmitting, setIsSubmitting ] = useState(false);

    // const navigate = useNavigate();

    const handleSubmitLoginForm = async (values, actions) => {
        actions.setSubmitting(false);
        setIsSubmitting(true);

        try {
            const res = await axios.post(LOGIN_API, values);
            
            const { user } = res.data.data;

            dispatch(authActions.login());

            dispatch(userActions.setUser({
                username: user.username,
                email: user.email,
                payId: user.payId
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
        <Box
            sx={{
                width: "100vw",
                height: "100vh"
            }}
            className="flex justify-center bg-gradient-to-r from-violet-950 to-black"
        >
            <Box className="flex flex-col pt-8 mb-2">
                <Box className='my-4 flex justify-center'>
                    <img src='/logo.png' width={210} height={50} />
                </Box>

                <Formik
                    initialValues={{...LOGIN_FORM_INITIAL_STATE}}
                    validationSchema={LOGIN_FORM_VALIDATION}
                    onSubmit={handleSubmitLoginForm}
                >
                    {({errors, touched}) => (
                        <Form className='bg-black'>
                            <Box
                                className="border-gray-300 border-solid border-2 rounded-lg p-8 w-[400px] bg-white opacity-90"
                            >
                                <Typography variant="h5">Login</Typography>

                                <FormikEmail 
                                    name="username"
                                    label="username" 
                                />

                                <FormikPassword
                                    name="password"
                                    label="Password"
                                />

                                <FormikSubmitButton 
                                    fullWidth
                                    variant="contained"
                                    className="mt-3 mb-5"
                                    disabled={
                                        (touched.username && errors.username) || 
                                        (touched.password && errors.password) ||
                                        isSubmitting ? 
                                            true : 
                                            false
                                    }
                                >
                                    {isSubmitting ? "Submitting..." : "Login"}
                                </FormikSubmitButton>
                            </Box>
                        </Form>
                    )}
                </Formik>
                
                <Button 
                    variant="outlined" className="normal-case"
                    fullWidth
                    sx={{marginTop: 3}}
                    onClick={() => navigate('/account/register')}
                >
                    Sign up
                </Button>
            </Box>
        </Box>
    );
}