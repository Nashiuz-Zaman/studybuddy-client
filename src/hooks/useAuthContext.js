// react
import { useContext } from "react";

// auth context
import { AuthContext } from "../Providers/AuthProvider";

const useAuthContext = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("Provider hasn't wrapped the app");
  } else {
    return authContextValue;
  }
};

export default useAuthContext;
