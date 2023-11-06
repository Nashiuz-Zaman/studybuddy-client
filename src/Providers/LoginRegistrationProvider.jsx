// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create the context
export const LoginRegistrationContext = createContext();

const LoginRegistratonProvider = ({ children }) => {
  // registration STATES
  // set to true when the submit button has been clicked to show errors only when the submission has happened
  const [formSubmitted, setFormSubmitted] = useState(false);

  // states of the form input boxes and error
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
    username: "",
    photoUrl: "",
    showSuccessToast: false,
    errors: [],
  });

  // login STATES
  // states of the form input boxes
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    showSuccessToast: false,
  });

  // error state
  const [loginError, setLoginError] = useState("");

  const valueObj = {
    registrationInfo,
    setFormSubmitted,
    setRegistrationInfo,
    formSubmitted,
    loginInfo,
    setLoginInfo,
    loginError,
    setLoginError,
  };

  return (
    <LoginRegistrationContext.Provider value={valueObj}>
      {children}
    </LoginRegistrationContext.Provider>
  );
};

LoginRegistratonProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default LoginRegistratonProvider;
