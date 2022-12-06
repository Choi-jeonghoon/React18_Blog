import useUserLogin from "../../hooks/login/useUserLogin";
import SigninContainer from "../../components/container/SigninContainer";

const SigninPage = () => {
  const { register, errors, handleSubmit, handleUserLoginRequest } =
    useUserLogin();

  return (
    <SigninContainer
      register={register}
      errors={errors}
      onUserLoginRequestEvent={handleSubmit(handleUserLoginRequest)}
    />
  );
};

export default SigninPage;
