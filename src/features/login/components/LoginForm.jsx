import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const LoginForm = () => {
  return (
    // Login Form Container
    <div className="min-h-screen flex flex-col items-center justify-center bg-loginFormBlue lg:w-1/2 ">
      {/* Login Form  */}
      <form className="  flex flex-col space-y-16 p-2  lg:w-80">
        {/* Form Inputs Container  */}
        <div className="flex flex-col space-y-6  p-2">
          {/* Form Heading  */}
          <h1 className="text-white text-2xl font-bold ">Login</h1>
          {/* Username Input - User Logo Container  */}
          <div className="bg-white py-1 px-2 flex flex-row justify-between w-full rounded-md items-center">
            <input
              type="text"
              placeholder="Username"
              className="flex-1 focus:outline-none ml-2"
            />
            <FontAwesomeIcon icon={faUser} className="text-loginFormIcon" />
          </div>
          {/* Password Input - Password Logo Container  */}
          <div className="bg-white py-1 px-2 flex flex-row justify-between w-full rounded-md items-center">
            <input
              type="password"
              placeholder="Password"
              className="flex-1 focus:outline-none ml-2"
            />
            <FontAwesomeIcon icon={faEyeSlash} className="text-loginFormIcon" />
          </div>
        </div>
        {/* Form Buttons  */}
        <button className="bg-loginFormButtonColor text-loginFormBlue font-bold w-52 px-1 py-1 rounded-md mx-auto">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
