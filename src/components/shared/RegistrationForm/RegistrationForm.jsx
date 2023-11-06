// react imports

import { useEffect } from "react";

// react router import
import { Link } from "react-router-dom";

// custom hooks import
import useRegistrationForm from "../../../hooks/useRegistrationForm";

// shared component imports
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

const RegistrationForm = () => {
  const {
    registrationInfo,
    setRegistrationInfo,
    getUsername,
    getEmail,
    getPassword,
    getPhotoUrl,
    handleSubmit,
    formSubmitted,
  } = useRegistrationForm();

  useEffect(() => {
    return () => {
      setRegistrationInfo({
        email: "",
        password: "",
        username: "",
        photoUrl: "",
        showSuccessToast: false,
        errors: [],
      });
    };
  }, [setRegistrationInfo]);

  // common styles for input and label jsx elements
  const labelClasses = "block mb-2 text-sm text-inherit";
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-2 text-textPrimary";

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full md:w-[20rem] mx-auto p-4">
        {/* username field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="username">
            Username
          </label>
          <input
            className={inputClasses}
            onChange={getUsername}
            type="text"
            id="username"
            value={registrationInfo.username}
            placeholder="username"
            required
          />
        </div>

        {/* photo url field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            className={inputClasses}
            onChange={getPhotoUrl}
            type="text"
            id="photoUrl"
            value={registrationInfo.photoUrl}
            placeholder="photo url"
            required
          />
        </div>

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
            value={registrationInfo.email}
            placeholder="email"
            required
          />
        </div>

        {/* password field */}
        <div>
          <label className={labelClasses} htmlFor="password">
            Password
          </label>
          <input
            className={inputClasses}
            onChange={getPassword}
            type="password"
            id="password"
            value={registrationInfo.password}
            placeholder="password"
            required
          />
        </div>

        {registrationInfo.errors.length > 0 && formSubmitted && (
          <div className="space-y-4 mt-4">
            {registrationInfo.errors.map((error) => {
              return (
                <p key={error} className="text-sm text-red-600">
                  *{error}
                </p>
              );
            })}
          </div>
        )}

        <ButtonBtn text="Register" modifyClasses="w-full block mt-10 mb-4" />
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-primary font-semibold" to={"/login"}>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
