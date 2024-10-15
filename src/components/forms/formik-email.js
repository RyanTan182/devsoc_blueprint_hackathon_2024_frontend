import { useField, useFormikContext } from "formik";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function FormikEmail(props) {
    const { name, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();

    const [ field, meta ] = useField(name);

    const handleChangeEmail = event => {
        setFieldValue(name, event.target.value)
    }

    const configEmail = {
        ...field,
        ...otherProps,
        type: "email",
        fullWidth: true,
        size: "small",
        required: true,
        margin: "normal",
        variant: "standard",
        onChange: handleChangeEmail
    };

    if (meta && meta.touched && meta.error) {
        configEmail.error = true;
        configEmail.helperText = meta.error;
    };

    return (
        <Box my={1}>
            <TextField {...configEmail} />
        </Box>
    )
};

export default FormikEmail;