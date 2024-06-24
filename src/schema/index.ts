import * as yup from "yup";
const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
export const signUpSchema = yup.object({
  fullName: yup.string().min(2).required("Provide a valid name"),
  num: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Provide a valid number"),
  email: yup.string().email().required("Provide a valid email"),
  message: yup.string().min(10).required("Provide your requirements"),
});
