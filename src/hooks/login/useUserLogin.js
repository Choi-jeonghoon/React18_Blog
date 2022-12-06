import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const userSchema = yup
  .object()
  .shape({
    email: yup.string().email("Please check your email information"),
    password: yup
      .string()
      .min(8, "Please check your password information")
      .max(15, "Please check your password information")
      .matches(/(?=.*\d)(?=.*[a-z]).{8,15}/),
  })
  .required();

const useUserLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleUserLoginRequest = (formValue) => {
    console.log(formValue);
  };

  return {
    register,
    errors,
    handleSubmit,
    handleUserLoginRequest,
  };
};

export default useUserLogin;
