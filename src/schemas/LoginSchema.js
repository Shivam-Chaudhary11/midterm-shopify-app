import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});
