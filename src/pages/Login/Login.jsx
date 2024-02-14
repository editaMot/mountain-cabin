import LoginForm from "../../features/authentication/LoginForm";
import LoginLayout from "../../ui/LoginLayout";
import Logo from "../../ui/Logo";

const Login = () => {
  return (
    <LoginLayout>
      <Logo />
      <h1>Log in to your account</h1>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
