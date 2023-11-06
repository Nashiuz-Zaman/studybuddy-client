// react imports
import { useEffect } from "react";

// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import GoogleLoginBtn from "./../GoogleLoginBtn/GoogleLoginBtn";

// custom hooks
import useLoginForm from "../../../hooks/useLoginForm";

const LoginForm = () => {
  const {
    loginInfo,
    setLoginInfo,
    getEmail,
    getPassword,
    handleSubmit,
    handleGoogleSignIn,
    loginError,
  } = useLoginForm();

  useEffect(() => {
    return () => {
      setLoginInfo({
        email: "",
        password: "",
        showSuccessToast: false,
      });
    };
  }, [setLoginInfo]);

  // common styles for input and label jsx elements
  const labelClasses = "block mb-2 text-sm text-inherit";
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-2 text-textPrimary";

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full md:w-[20rem] mx-auto p-4">
        {/* email field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            className={inputClasses}
            onChange={getEmail}
            type="email"
            id="email"
            value={loginInfo.email}
            placeholder="email"
            required
          />
        </div>

        {/* password field */}
        <div className="">
          <label className={labelClasses} htmlFor="password">
            Password
          </label>
          <input
            className={inputClasses}
            onChange={getPassword}
            type="password"
            id="password"
            value={loginInfo.password}
            placeholder="password"
            required
          />
        </div>
        {loginError !== null && (
          <p className="mt-4 text-red-600 text-center">{loginError}</p>
        )}

        <ButtonBtn text="Log In" modifyClasses="w-full block mt-10 mb-4" />
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-primary font-semibold" to={"/register"}>
            Register
          </Link>
        </p>
      </form>

      <GoogleLoginBtn
        onClickFunction={handleGoogleSignIn}
        modifyClasses="w-max mx-auto"
      />
    </div>
  );
};

export default LoginForm;
