import * as Yup from "yup";
import { INVALID_EMAIL_ERROR_MESSAGE, REQUIRED_ERROR_MESSAGE, INVALID_BOOLEAN_TYPE_ERROR_MESSAGE } from "./form-error-message";

// const NUMBER_REGEX = /^[0-9]*$/;

export const EMAIL_SCHEMA = Yup
    .string()
    .typeError(INVALID_EMAIL_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE)
    .email(INVALID_EMAIL_ERROR_MESSAGE);

export const PASSWORD_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .min(7, "Please input at least 7 characters.")
    .max(30, "Please input less than 30 characters.");

export const CONFIRM_PASSWORD_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .oneOf([Yup.ref("password"), null], "Password must match.");

export const CONFIRM_NEW_PASSWORD_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .oneOf([Yup.ref("newPassword"), null], "Password must match.");

export const NAME_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .max(50, "Please input less than 50 characters.");

export const STRING_REQUIRED_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE);

export const BOOLEAN_SCHEMA = Yup
    .boolean()
    .typeError(INVALID_BOOLEAN_TYPE_ERROR_MESSAGE);

export const REVIEW_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .max(1500, "Please input less than ${max} characters.");

export const REVIEW_RATING_SCHEMA = Yup
    .number()
    .min(0.5, "The least amount you can input is 0.5.")
    .max(5, "The most amount you can input is 5.");
