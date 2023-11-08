// react
import { useContext } from "react";

// context
import { LogoutContext } from "../Providers/LogoutProvider";

const useLogoutProvider = () => {
  const contextValue = useContext(LogoutContext);

  if (!contextValue) {
    throw new Error("Logout provider hasn't wrapped the app properly");
  }

  return contextValue;
};

export default useLogoutProvider;
