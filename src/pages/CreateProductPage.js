import { Box, Grid2, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function CreateProductPage() {
    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        price: Yup.number().positive('Price must be a positive number').required('Price is required'),
        video: Yup.mixed().required('Video is required'),
        photo: Yup.mixed().required('Photo is required'),
        productType: Yup.string().required('Product type is required'),
        description: Yup.string().required('Description is required')
    });

    return (
        <Box className="bg-white p-10 mx-20">
            <Box className = "text-center">
                <Typography variant="h5">
                    Join us today
                </Typography>
            </Box>

            <Formik
                initialValues={{ title: '', price: '', video: null, photo: null, productType: '', description: '', tag: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                // Handle form submission
                    console.log('Form data:', values);
                }}
            >
                {({ setFieldValue }) => (
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
                            height: '200px', // Adjust height as needed
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

                    <button type="submit" className="bg-blue-500 border-none w-20 text-white p-2">
                        Submit
                    </button>
                </Form>
                )}
            </Formik>
        </Box>
    )
}