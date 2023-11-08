// react
import PropTypes from "prop-types";

// react router
import { Link } from "react-router-dom";

// shared components
import UserProfile from "../UserProfile/UserProfile";
import ButtonBtn from "../ButtonBtn/ButtonBtn";

// custom hook
import useAuthProvider from "./../../../hooks/useAuthProvider";

const LargeScreenAuthOptions = ({ authUser = null }) => {
  // link classes
  const linkClasses = "hover:underline";

  // take the log out function from login/registration provider custom hook
  const { logout } = useAuthProvider();

  return (
    <div>
      {/* if not logged in show login and register */}
      {!authUser && (
        <nav className="flex items-center gap-5">
          <Link className={linkClasses} to="/login">
            Login
          </Link>
          <Link className={linkClasses} to="/register">
            Register
          </Link>
        </nav>
      )}

      {/* if logged in then show the profile picture and logout button */}
      {authUser && (
        <div className="flex items-center gap-5">
          <UserProfile authUser={authUser} />
          <ButtonBtn
            outlinedPrimary={true}
            onClickFunction={logout}
            text="Log Out"
          />
        </div>
      )}
    </div>
  );
};

LargeScreenAuthOptions.propTypes = {
  authUser: PropTypes.object,
};

export default LargeScreenAuthOptions;
