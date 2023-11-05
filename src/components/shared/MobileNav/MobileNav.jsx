// react
import PropTypes from "prop-types";

// react router
import { NavLink } from "react-router-dom";

// shared components
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import Brandlogo from "../Brandlogo/Brandlogo";

// must import data here to make this component work
// data
import { navOptionsAlways } from "../../../nativeData/navigationOptions";
import { navOptionsLoggedIn } from "../../../nativeData/navigationOptions";
import brandLogoWhite from "./../../../assets/website-logo/logo-white.webp";

const MobileNav = ({
  closeNavFunction = null,
  openState = false,
  user = null,
}) => {
  return (
    <nav
      className={`block lg:hidden h-screen fixed top-0 right-0 w-full scale-0 origin-center transition-all duration-300 z-20 ${
        openState ? "!scale-100" : ""
      } text-center p-8 bg-gradient-to-br from-primary to-primaryLight`}
    >
      <MobileMenuCloseBtn clickHandler={closeNavFunction}></MobileMenuCloseBtn>

      <Brandlogo
        logo={brandLogoWhite}
        modifyClasses="block w-max mx-auto mb-10"
      />

      {/* regular part */}
      <ul className="flex flex-col gap-6 mb-14">
        {/* this part will be always shown */}
        {navOptionsAlways &&
          navOptionsAlways.map((option) => {
            return (
              <li key={option.id} onClick={closeNavFunction}>
                <NavLink
                  className="leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200"
                  to={option.url}
                >
                  {option.text}
                </NavLink>
              </li>
            );
          })}

        {/* this part will be shown if the user is logged in */}
        {!user &&
          navOptionsLoggedIn &&
          navOptionsLoggedIn.map((option) => {
            return (
              <li key={option.id} onClick={closeNavFunction}>
                <NavLink
                  className="leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200"
                  to={option.url}
                >
                  {option.text}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

MobileNav.propTypes = {
  logo: PropTypes.string,
  user: PropTypes.object,
  closeNavFunction: PropTypes.func,
  openState: PropTypes.bool,
};

export default MobileNav;
