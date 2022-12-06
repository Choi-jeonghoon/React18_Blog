import useUserLogin from "../../hooks/login/useUserLogin";
import SigninContainer from "../../components/container/SigninContainer";

const SigninPage = () => {
  const { register, handleSubmit, handleUserLoginRequest } = useUserLogin();

  return (
    <SigninContainer
      register={register}
      onUserLoginRequestEvent={handleSubmit(handleUserLoginRequest)}
    />
  );
};

export default SigninPage;
