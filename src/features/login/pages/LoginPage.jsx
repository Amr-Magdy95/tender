import LogoContainer from "../components/LogoContainer";
import LoginForm from "../components/LoginForm";
const LoginPage = () => {
  return (
    <section>
      {/* Login Container  */}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Logo Container  */}
        <LogoContainer />
        {/* Login Form  */}
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
