import { useField } from "formik";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function FormikTextField(props) {
    const { name, ...otherProps } = props;

    const [field, meta] = useField(name);

    const configTextField = {
        ...field,
        ...otherProps
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <Box my={1}>
            <TextField {...configTextField} />
        </Box>
    )
};

export default FormikTextField;