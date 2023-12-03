// react
import PropTypes from "prop-types";

// react router
import { NavLink } from "react-router-dom";

// react hashlink
import { HashLink } from "react-router-hash-link";

// must import data here to make this component work
// import custom data hook
import useNavData from "../../../hooks/useNavData";

const LargeScreenNav = ({ modifyClasses = "" }) => {
  // link Classes =
  const linkClasses =
    "block leading-[normal] rounded-default p-2 text-white transition-all duration-200 hover:bg-white hover:text-primary";

  const { navOptionsAlways } = useNavData();

  return (
    <nav className={`flex justify-center ${modifyClasses}`}>
      <ul className="flex gap-3 items-center">
        {/* these links will always be here */}
        {navOptionsAlways &&
          navOptionsAlways.map((option) => {
            // if hashed link present then return this part, if not then return the next part

            // hashed link
            if (option.hashed) {
              return (
                <li key={option.id}>
                  <HashLink className={linkClasses} to={option.url}>
                    {option.text}
                  </HashLink>
                </li>
              );
            }

            // normal link
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
  modifyClasses: PropTypes.string,
};

export default LargeScreenNav;
