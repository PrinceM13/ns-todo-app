import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(8)
});

const registerSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(8)
  // // * confirmPassword is equal to password
  // confirmPassword: yup
  //   .string()
  //   .required()
  //   .oneOf([yup.ref("password")], "Passwords must match")
});

export { loginSchema, registerSchema };
