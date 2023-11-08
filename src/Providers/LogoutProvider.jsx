// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create context
export const LogoutContext = createContext();

const LogoutProvider = ({ children }) => {
  const [logoutToastOpen, setLogoutToastOpen] = useState(false);

  const logoutObj = {
    logoutToastOpen,
    setLogoutToastOpen,
  };

  return (
    <LogoutContext.Provider value={logoutObj}>
      {children}
    </LogoutContext.Provider>
  );
};

LogoutProvider.propTypes = {
  children: PropTypes.node,
};

export default LogoutProvider;
