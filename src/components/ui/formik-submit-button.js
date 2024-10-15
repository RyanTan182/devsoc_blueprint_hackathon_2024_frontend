import { useFormikContext } from "formik";
import Button from "@mui/material/Button";

function FormikSubmitButton(props) {
    const { children, ...otherProps } = props;
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configSubmitButton = {
        ...otherProps,
        onClick: handleSubmit
    }

    return (
        <Button {...configSubmitButton}>
            {children}
        </Button>
    )
};

export default FormikSubmitButton;