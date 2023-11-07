// react
import PropTypes from "prop-types";

// react router
import { NavLink } from "react-router-dom";

// react hashed link
import { HashLink } from "react-router-hash-link";

// shared components
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import Brandlogo from "../Brandlogo/Brandlogo";

// must import data here to make this component work
// import custom data hook
import useNavData from "../../../hooks/useNavData";

// white logo import
import brandLogoWhite from "./../../../assets/website-logo/logo-white.webp";

const MobileNav = ({
  closeNavFunction = null,
  openState = false,
  authUser = null,
}) => {
  // take the data for nav options from this custom hook
  // without these data this component will NOT work
  const { navOptionsAlways, navOptionsLoggedIn } = useNavData();

  // one single place for the link classes
  const linkClasses =
    "leading-[normal] px-2 py-1 rounded-default border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200";

  return (
    // whole mobile nav starts here
    <nav
      className={`block lg:hidden h-screen fixed top-0 right-0 w-full scale-0 origin-center transition-all duration-300 z-20 ${
        openState ? "!scale-100" : ""
      } text-center p-8 bg-gradient-to-t from-primary to-primaryLight`}
    >
      {/* X cross button to close nav */}
      <MobileMenuCloseBtn clickHandler={closeNavFunction} />

      {/* brand logo part */}
      <Brandlogo
        logo={brandLogoWhite}
        modifyClasses="block w-max mx-auto mb-12"
      />

      {/* regular part */}
      <ul className="flex flex-col gap-3 mb-14">
        {/* this part will be always shown */}
        {navOptionsAlways &&
          navOptionsAlways.map((option) => {
            // if hashed link present then return this part, if not then return the next part

            // hashed link
            if (option.hashed) {
              return (
                <li key={option.id} onClick={closeNavFunction}>
                  <HashLink className={linkClasses} to={option.url}>
                    {option.text}
                  </HashLink>
                </li>
              );
            }

            // normal link
            return (
              <li key={option.id} onClick={closeNavFunction}>
                <NavLink className={linkClasses} to={option.url}>
                  {option.text}
                </NavLink>
              </li>
            );
          })}

        {/* this part will be shown if the authUser is logged in */}
        {authUser &&
          navOptionsLoggedIn &&
          navOptionsLoggedIn.map((option) => {
            // if hashed link present then return this part, if not then return the next part

            // hashed link
            if (option.hashed) {
              return (
                <li key={option.id} onClick={closeNavFunction}>
                  <HashLink className={linkClasses} to={option.url}>
                    {option.text}
                  </HashLink>
                </li>
              );
            }

            // normal link
            return (
              <li key={option.id} onClick={closeNavFunction}>
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

MobileNav.propTypes = {
  logo: PropTypes.string,
  authUser: PropTypes.object,
  closeNavFunction: PropTypes.func,
  openState: PropTypes.bool,
};

export default MobileNav;
