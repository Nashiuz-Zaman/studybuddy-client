// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create the context
export const AssignmentStatusContext = createContext();

const AssignmentStatusProvider = ({ children }) => {
  // creation  state
  const [assignmentCreationSuccessful, setAssignmentCreationSuccessful] =
    useState(false);

  // update state
  const [updateSuccessful, setUpdateSuccessful] = useState(false);

  // delete state
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);

  const assignmentStatusObj = {
    assignmentCreationSuccessful,
    setAssignmentCreationSuccessful,
    updateSuccessful,
    setUpdateSuccessful,
    deleteSuccessful,
    setDeleteSuccessful,
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
