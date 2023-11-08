// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create the context
export const AssignmentStatusContext = createContext();

const AssignmentStatusProvider = ({ children }) => {
  const [assignmentCreationSuccessful, setAssignmentCreationSuccessful] =
    useState(false);

  const assignmentStatusObj = {
    assignmentCreationSuccessful,
    setAssignmentCreationSuccessful,
  };

  return (
    <AssignmentStatusContext.Provider value={assignmentStatusObj}>
      {children}
    </AssignmentStatusContext.Provider>
  );
};

AssignmentStatusProvider.propTypes = {
  children: PropTypes.node,
};

export default AssignmentStatusProvider;
