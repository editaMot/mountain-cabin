import "./LoginLayout.scss";

const LoginLayout = ({ children }) => {
  return (
    <main className="login-layout">
      <div className="login-layout__content">{children}</div>
    </main>
  );
};

export default LoginLayout;
