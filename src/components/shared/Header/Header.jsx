// react import
import PropTypes from "prop-types";

// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";
import LargeScreenAuthOptions from "../LargeScreenAuthOptions/LargeScreenAuthOptions";
// import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";
// import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
// import MobileNav from "../MobileNav/MobileNav";
// import UsernameWithImage from "../UsernameWithImage/UsernameWithImage";
// import ButtonBtn from "../ButtonBtn/ButtonBtn";

// container components
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import OuterContainer from "./../../containers/OuterContainer.jsx/OuterContainer";

const Header = ({ logo = "", navigationOptions = null }) => {
  // extract mobile navigation functions and state
  // const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  return (
    <header>
      <InnerContainer>
        {/* brand logo and login/register, logout/user profile part */}
        <div className="flex items-center justify-between">
          <Brandlogo logo={logo} modifyClasses="py-elementGapSm" />

          <div>
            {/* content here will change base on login/logout status */}
            <LargeScreenAuthOptions />
          </div>
        </div>
      </InnerContainer>

      <div className="bg-gradient-to-r from-primary to-primaryLight">
        <OuterContainer>
          <InnerContainer>
            <div className="block lg:grid lg:grid-cols-2 items-center  py-elementGapSm">
              {/* large screen navbar */}
              {/* <div className="hidden lg:block">
                <LargeScreenNav
                  navigationOptions={navigationOptions}
                  user={user}
                />
              </div> */}

              {/* theme change button and mobile nav toggle button */}
              <div className="flex gap-2 xl:gap-3 justify-between items-center lg:justify-self-end">
                {/* mobile nav open button and profile photo component */}
                {/* if the size */}
                <div className="flex items-center gap-2 xl:gap-4">
                  {/* {user !== null && (
                    <>
                      <UsernameWithImage user={user} />
                      <ButtonBtn
                        outlined={true}
                        text="Log Out"
                        onClickFunction={signOutUser}
                        modifyClasses="rounded-default !px-2 xl:!px-4 hidden lg:block hover:bg-white hover:text-primary"
                      />
                    </>
                  )} */}
                </div>
              </div>
            </div>
          </InnerContainer>

          {/* moble navigation menu - THE MENU WILL OPEN AND CLOSE according to the state extracted from the custom hook */}
          {/* <MobileNav
            brandLogoImage={brandLogoImageDark}
            navigationOptions={navigationOptions}
            openState={mobileNavOpen}
            closeNavFunction={closeNav}
            user={user}
            logOutFunction={signOutUser}
          /> */}
        </OuterContainer>
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array,
};

export default Header;
