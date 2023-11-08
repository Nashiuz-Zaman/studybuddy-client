// react
import { useContext } from "react";

// context
import { UpdateDeleteValidityContext } from "../Providers/UpdateDeleteValidityProvider";

const useUpdateDeleteValidityProvider = () => {
  const contextValue = useContext(UpdateDeleteValidityContext);

  if (!contextValue) {
    throw new Error(
      "Update Delete validity provider hasn't wrapped the app properly"
    );
  }

  return contextValue;
};

export default useUpdateDeleteValidityProvider;
