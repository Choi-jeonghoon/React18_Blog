import useUserLogin from "../../../hooks/login/useUserLogin";
import AuthContainer from "../../../components/container/AuthContainer";

const SignupPage = () => {
  const { register, errors, handleSubmit, handleUserLoginRequest } =
    useUserLogin();

  return (
    <AuthContainer
      type="register"
      register={register}
      errors={errors}
      onUserLoginRequestEvent={handleSubmit(handleUserLoginRequest)}
    />
  );
};

export default SignupPage;
