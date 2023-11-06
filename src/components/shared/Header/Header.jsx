// react import
import PropTypes from "prop-types";

// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";
import LargeScreenAuthOptions from "../LargeScreenAuthOptions/LargeScreenAuthOptions";
import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";
import MobileMenuBtn from "./../MobileMenuBtn/MobileMenuBtn";
import MobileNav from "../MobileNav/MobileNav";
// import UsernameWithImage from "../UsernameWithImage/UsernameWithImage";
// import ButtonBtn from "../ButtonBtn/ButtonBtn";

// container components
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// custom hooks
import useMobileNavigation from "./../../../hooks/useMobileNavigation";
import useAuthContext from "../../../hooks/useAuthContext";

const Header = ({ logo = "", modifyClasses = "" }) => {
  // extract mobile navigation functions and state
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  // take user data from auth context
  const { user, appLoading } = useAuthContext();

  return (
    <header className={`${modifyClasses}`}>
      <InnerContainer>
        {/* brand logo and login/register, logout/user profile part */}
        <div className="flex flex-col gap-8 sm:flex-row items-center justify-between py-elementGapSm xsm:py-elementGapMd">
          {/* brand logo */}
          <Brandlogo logo={logo} />

          {/* content here will change base on login/logout status */}
          <div>{!appLoading && <LargeScreenAuthOptions authUser={user} />}</div>
        </div>

        {/* desktop nav, hamburger button and mobile nav is here */}
        <div className="bg-primary py-elementGapSm rounded-full">
          {/* desktop navbar */}
          <LargeScreenNav authUser={user} modifyClasses="hidden lg:flex" />
          {/* mobile menu hamburger button */}
          <MobileMenuBtn openNavFunction={openNav} modifyClasses="mx-auto" />

          {/* moble navigation menu - THE MENU WILL OPEN AND CLOSE according to the state extracted from the custom hook */}
          <MobileNav
            logo={logo}
            openState={mobileNavOpen}
            closeNavFunction={closeNav}
            authUser={user}
          />
        </div>
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  modifyClasses: PropTypes.string,
};

export default Header;
