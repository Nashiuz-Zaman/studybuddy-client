// react
import { useContext } from "react";

// context
import { AssignmentStatusContext } from "../Providers/AssignmentStatusProvider";

const useAssignmentStatusProvider = () => {
  const contextValue = useContext(AssignmentStatusContext);

  if (!contextValue) {
    throw new Error(
      "Assignment status provider hasn't wrapped the app properly"
    );
  }

  return contextValue;
};

export default useAssignmentStatusProvider;
