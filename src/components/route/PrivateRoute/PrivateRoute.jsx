// react imports
import PropTypes from "prop-types";

// react router dom imports
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hooks
import useAuthContext from "../../../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  // extract the user state from context
  const { user, appLoading } = useAuthContext();

  // find out which route the user was originally going to
  const { pathname } = useLocation();

  if (!appLoading) {
    // if user is present then give permission to go to selected page
    if (user) {
      return children;
    }
    return <Navigate state={pathname} to="/login"></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
