import { Box, Grid2, Typography } from '@mui/material';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { CREATE_PRODUCT_API } from '../requests/requestConfig';
import FormikSubmitButton from '../components/forms/formik-submit-button';

export default function CreateProductPage() {
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        price: Yup.number().positive('Price must be a positive number').required('Price is required'),
        productType: Yup.string().required('Product type is required'),
        description: Yup.string().required('Description is required')
    });

    const handleSubmitCreateProductForm = async(values, actions) => {
        actions.setSubmitting(false);

        setIsSubmitting(true);

        try {
            const res = await axios.post(CREATE_PRODUCT_API, values);
            // const product = res.data.data;

            if (res.status === 200) {
                // dispatch(snackbarActions.setSnackbarState({
                //     open: true, 
                //     type: "success", 
                //     message: "Successfully create product."
                // }));

                setIsSubmitting(false);
            };
        } catch(err) {
            // dispatch(snackbarActions.setSnackbarState({
            //     open: true , 
            //     type: "error", 
            //     message: "Oops... Something went wrong."
            // }));

            setIsSubmitting(false);
        }
    };


    return (
        <Box className='bg-gradient-to-r from-violet-950 to-black p-20'>

            <Box className="bg-white p-10 opacity-80" 
                sx={{ 
                    borderRadius: '16px',
                    border: 0.5
                }}
            >
                <Box className = "text-center">
                    <Typography variant="h5">
                        Join us today
                    </Typography>
                </Box>

                <Formik
                    initialValues={{ title: '', price: '', video: null, photo: null, productType: '', description: '', tag: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitCreateProductForm}
                >
                    {({ errors, touched, setFieldValue }) => (
                    <Form className="flex flex-col space-y-4 p-4">
                        <Grid2 container spacing={2} xs={12}>
                            <Grid2 item>
                                <Typography className="pb-2">
                                    Title
                                </Typography>

                                <Field
                                    type="text"
                                    name="title"
                                    className="border border-gray-300 rounded p-2"
                                />

                                <ErrorMessage name="title" component="div" className="text-red-600" />
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} xs={12}>
                            <Grid2 item>
                                <Typography className="pb-2">
                                    Price
                                </Typography>

                                <Field
                                    type="text"
                                    name="price"
                                    className="border border-gray-300 rounded p-2"
                                />

                                <ErrorMessage name="price" component="div" className="text-red-600" />
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} xs={12}>
                            <Grid2 item>
                                <label htmlFor="video">Upload Video</label>

                                <input
                                    type="file"
                                    name="video"
                                    accept="video/*"
                                    onChange={(event) => {
                                    setFieldValue('video', event.currentTarget.files[0]);
                                    }}
                                    className="border border-gray-300 rounded p-2"
                                />
                                <ErrorMessage name="video" component="div" className="text-red-600" />
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} xs={12}>
                            <Grid2 item >
                                <label htmlFor="photo">Upload Photo</label>

                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={(event) => {
                                        setFieldValue('photo', event.currentTarget.files[0]);
                                    }}
                                    className="border border-gray-300 rounded p-2 flex-1"
                                />

                                <ErrorMessage name="price" component="div" className="text-red-600" />
                            </Grid2>
                        </Grid2>

                        <Typography>
                            Description
                        </Typography>

                        <Field
                            as="textarea"
                            name="description"
                            cstyle={{
                                width: '100%',
                                height: '50', // Adjust height as needed
                            }}
                        />

                        <Grid2>
                            <Typography className="pb-2">
                                Tags
                            </Typography>

                            <Field
                                type="text"
                                name="tags"
                                className="border border-gray-300 rounded p-2"
                            />
                            
                            <ErrorMessage name="tag" component="div" className="text-red-600" />
                        </Grid2>

                        <FormikSubmitButton 
                            variant="contained"
                            disabled={(touched.amount && errors.amount) ? true : false}
                        >
                            Submit
                        </FormikSubmitButton>
                    </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}