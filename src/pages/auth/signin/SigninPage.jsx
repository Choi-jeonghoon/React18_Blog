import useUserLogin from "../../../hooks/login/useUserLogin";
import AuthContainer from "../../../components/container/AuthContainer";

const SigninPage = () => {
  const { register, errors, handleSubmit, handleUserLoginRequest } =
    useUserLogin();

  return (
    <AuthContainer
      type="login"
      register={register}
      errors={errors}
      onUserLoginRequestEvent={handleSubmit(handleUserLoginRequest)}
    />
  );
};

export default SigninPage;
