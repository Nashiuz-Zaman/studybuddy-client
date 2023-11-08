// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// context
export const UpdateDeleteValidityContext = createContext();

// custom hook
import useFetch from "../hooks/useFetch";

// data
import { apiBaseURL } from "../nativeData/apiBase";

const UpdateDeleteValidityProvider = ({ children }) => {
  const [updateDeleteInvalid, setUpdateDeleteInvalid] = useState(false);

  const { postData } = useFetch();

  // update/delete validity checker
  const checkEmailValidity = () => {
    const url = `${apiBaseURL}/checkEmailValidity`;

    postData(url);
  };

  const valueObj = { updateDeleteInvalid, setUpdateDeleteInvalid };

  return (
    <UpdateDeleteValidityContext.Provider value={valueObj}>
      {children}
    </UpdateDeleteValidityContext.Provider>
  );
};

UpdateDeleteValidityProvider.propTypes = {
  children: PropTypes.any,
};

export default UpdateDeleteValidityProvider;
