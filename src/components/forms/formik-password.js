import { useState } from "react";
import { useField, useFormikContext } from "formik";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function FormikPassword(props) {
    const { name, ...otherProps } = props;
    const [showPassword, setShowPassword] = useState(false);
    const { setFieldValue } = useFormikContext();
    const [ field, meta ] = useField(name);

    const handleChangePassword = event => {
        setFieldValue(name, event.target.value)
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const configPassword = {
        ...field,
        ...otherProps,        
        type: showPassword ? "text" : "password",
        fullWidth: true,
        size: "small",
        required: true,
        variant: "standard",
        onChange: handleChangePassword,
        InputProps: {
            endAdornment: 
            <InputAdornment position="end">
                <IconButton
                    onClick={handleClickShowPassword}
                >
                    {showPassword ? 
                        <VisibilityOff /> : 
                        <Visibility />
                    }
                </IconButton>
            </InputAdornment>
        }
    };

    if (meta && meta.touched && meta.error) {
        configPassword.error = true;
        configPassword.helperText = meta.error;
    };

    return (
        <Box my={1}>
            <TextField {...configPassword} />
        </Box>
    )
};

export default FormikPassword;