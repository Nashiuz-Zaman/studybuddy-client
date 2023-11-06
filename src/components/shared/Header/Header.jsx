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
import OuterContainer from "./../../containers/OuterContainer.jsx/OuterContainer";

// custom hooks
import useMobileNavigation from "./../../../hooks/useMobileNavigation";
import useAuthContext from "../../../hooks/useAuthContext";

const Header = ({ logo = "" }) => {
  // extract mobile navigation functions and state
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  // take user data from auth context
  const { user, appLoading } = useAuthContext();

  return (
    <header>
      <InnerContainer>
        {/* brand logo and login/register, logout/user profile part */}
        <div className="flex flex-col gap-8 sm:flex-row items-center justify-between py-elementGapSm xsm:py-elementGapMd">
          <Brandlogo logo={logo} />

          <div>
            {/* content here will change base on login/logout status */}
            {!appLoading && <LargeScreenAuthOptions authUser={user} />}
          </div>
        </div>
      </InnerContainer>

      <div className="bg-gradient-to-r from-primary to-primaryLight py-elementGapSm">
        <OuterContainer>
          <InnerContainer>
            <LargeScreenNav authUser={user} modifyClasses="hidden lg:flex" />
            <MobileMenuBtn openNavFunction={openNav} modifyClasses="ml-auto" />
          </InnerContainer>

          {/* moble navigation menu - THE MENU WILL OPEN AND CLOSE according to the state extracted from the custom hook */}
          <MobileNav
            logo={logo}
            openState={mobileNavOpen}
            closeNavFunction={closeNav}
            authUser={user}
          />
        </OuterContainer>
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
