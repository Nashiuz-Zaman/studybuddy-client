// react router dom imports
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hook
import useAuthContext from "./useAuthContext";
import useLoginRegistrationProvider from "./useLoginRegistrationProvider";

const useLoginForm = () => {
  // extract functions from auth context
  const { login, setAppLoading, loginGoogle } = useAuthContext();

  const { loginInfo, setLoginInfo, loginError, setLoginError } =
    useLoginRegistrationProvider();

  // create the navigation function
  const navigate = useNavigate();

  // extract state value from use location hook
  const { state } = useLocation();

  // on change run this function for email field
  const getEmail = (e) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };

  // function for handling google sign in
  const handleLoginGoogle = () => {
    loginGoogle()
      .then(() => {
        // if login successful then show success toast first and then set timer to navigate to the target page after a certain time
        setLoginInfo((prev) => {
          return { ...prev, showSuccessToast: true };
        });

        // set the timer and clear the timer
        const timer = setTimeout(() => {
          setLoginInfo((prev) => {
            return { ...prev, showSuccessToast: false };
          });

          // if there is state navigate to that state or navigate to home page
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }

          // clear the timeout
          clearTimeout(timer);
        }, 2100);
      })
      // handle error
      .catch((error) => console.error(error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError(null);

    login(loginInfo.email, loginInfo.password)
      .then(() => {
        // if login successful then show success toast first and then set timer to navigate to the target page after a certain time
        setLoginInfo((prev) => {
          return { ...prev, showSuccessToast: true };
        });

        // set the timer and clear the timer
        const timer = setTimeout(() => {
          setLoginInfo((prev) => {
            return { ...prev, showSuccessToast: false };
          });

          // if there is state navigate to that state or navigate to home page
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }

          // clear the timeout
          clearTimeout(timer);
        }, 2100);
      })

      // handle error
      .catch((error) => {
        setLoginError("Email/Password doesn't match. Try again.");
        console.error(error.message);
        setAppLoading(false);
      });
  };

  return {
    loginInfo,
    setLoginInfo,
    getEmail,
    getPassword,
    handleLogin,
    loginError,
    handleLoginGoogle,
  };
};

export default useLoginForm;
