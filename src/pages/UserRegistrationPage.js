import { useState } from "react";
// import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import Link from 'next/link';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import { authActions } from "../store/authSlice";
// import LogoButtonWhite from "../../components/ui/logo-button-white";
import FormikTextField from "../components/forms/formik-text-field";
import FormikEmail from "../components/forms/formik-email";
import FormikPassword from "../components/forms/formik-password";
import FormikSubmitButton from "../components/forms/formik-submit-button";
import { CONFIRM_PASSWORD_SCHEMA, EMAIL_SCHEMA, NAME_SCHEMA, PASSWORD_SCHEMA } from "../components//forms/form-schema";
// import { snackbarActions } from "../../store/snackbar-slice";
import { userActions } from "../store/userSlice";
import { CREATE_ACCOUNT_API } from "../requests/requestConfig";

const SIGN_UP_FORM_INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SIGN_UP_FORM_VALIDATION = Yup.object().shape({
    name: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    password: PASSWORD_SCHEMA,
    confirmPassword: CONFIRM_PASSWORD_SCHEMA
});

function SignUpPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleSubmitSignUpForm = async (values) => {
        setIsSubmitting(true);

        try {
            const res = await axios.post(CREATE_ACCOUNT_API, values);

            const user = res.data.data;
    
            if (res.status === 201 || res.status === 200) {
                dispatch(authActions.login());

                dispatch(userActions.setUser({
                    username: user.username,
                    email: user.email,
                    payId: user.payId,
                }));

                // dispatch(snackbarActions.setSnackbarState({
                //     open: true,
                //     type: "success",
                //     message: "Successfully created user."
                // }));
        
                navigate('/');
            }
        } catch(err) {
            // dispatch(snackbarActions.setSnackbarState({
            //     open: true , 
            //     type: "error", 
            //     message: err?.response?.data?.message ? err.response.data.message : "Oops... Something went wrong."
            // }));

            setIsSubmitting(false)
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
                    initialValues={{...SIGN_UP_FORM_INITIAL_STATE}}
                    validationSchema={SIGN_UP_FORM_VALIDATION}
                    onSubmit={handleSubmitSignUpForm}
                >
                    {({errors, touched }) => (
                        <Form>
                            <Box
                                className="border-gray-300 border-solid border-2 rounded-lg p-8 w-[400px] bg-white opacity-90"
                            >
                                <Typography variant="h5">Create account</Typography>

                                <FormikTextField 
                                    name="name"
                                    label="Name"
                                    variant="standard"
                                    fullWidth
                                    className="my-2"
                                />

                                <FormikEmail 
                                    name="email"
                                    label="Email" 
                                    className="my-2"
                                />

                                <FormikPassword
                                    name="password"
                                    label="Password"
                                    className="my-2"
                                />

                                <FormikPassword
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    className="my-2"
                                />

                                <FormikSubmitButton 
                                    fullWidth
                                    variant="contained"
                                    className="mt-3 mb-5"
                                    disabled={
                                        (touched.email && errors.email) || 
                                        (touched.password && errors.password) || 
                                        (touched.name && errors.name) || 
                                        (touched.confirmPassword && errors.confirmPassword) ||
                                        isSubmitting ? 
                                            true : 
                                            false
                                    }
                                >
                                    {isSubmitting ? "Submitting..." : "Sign up"}
                                </FormikSubmitButton>
                            </Box>
                        </Form>
                    )}
            </Formik>
        </Box>
    </Box>
    )
};

export default SignUpPage;