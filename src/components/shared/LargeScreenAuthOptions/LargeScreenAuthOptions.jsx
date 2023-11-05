// react
import PropTypes from "prop-types";

// react router
import { Link } from "react-router-dom";

// shared components
import UsernameWithImage from "./../UsernameWithImage/UsernameWithImage";

// link classes
const linkClasses = "text-primary hover:underline transition-all duration-300";

const LargeScreenAuthOptions = ({ authUser = null }) => {
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
          <UsernameWithImage user={authUser} justImage={true} />
        </div>
      )}
    </div>
  );
};

LargeScreenAuthOptions.propTypes = {
  authUser: PropTypes.object,
};

export default LargeScreenAuthOptions;