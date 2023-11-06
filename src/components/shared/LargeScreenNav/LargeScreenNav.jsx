// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

// must import data here to make this component work
// import custom data hook
import useNavData from "../../../hooks/useNavData";

const LargeScreenNav = ({ authUser = null, modifyClasses = "" }) => {
  // link Classes =
  const linkClasses =
    "leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white transition-all duration-200";

  const { navOptionsAlways, navOptionsLoggedIn } = useNavData();

  return (
    <nav className={`flex justify-center ${modifyClasses}`}>
      <ul className="flex gap-2">
        {/* these links will always be here */}
        {navOptionsAlways &&
          navOptionsAlways.map((option) => {
            return (
              <li key={option.id}>
                <NavLink className={linkClasses} to={option.url}>
                  {option.text}
                </NavLink>
              </li>
            );
          })}

        {/* if user is logged-in this part will be visible */}
        {authUser !== null &&
          navOptionsLoggedIn &&
          navOptionsLoggedIn.map((option) => {
            return (
              <li key={option.id}>
                <NavLink className={linkClasses} to={option.url}>
                  {option.text}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

LargeScreenNav.propTypes = {
  authUser: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default LargeScreenNav;
