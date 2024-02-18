import Logo from "../../../images/logo.svg";

const LogoContainer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:w-1/2">
      <img src={Logo} alt="" className="w-52 h-52" />
    </div>
  );
};

export default LogoContainer;
