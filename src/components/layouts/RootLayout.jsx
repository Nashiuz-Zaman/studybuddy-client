// react-router imports
import { Outlet } from "react-router-dom";

// shared components
import Header from "../shared/Header/Header";
import LogoutToast from "../shared/LogoutToast/LogoutToast";
import CreationSuccessModal from "../shared/CreationSuccessModal/CreationSuccessModal";
import UpdateDeleteDeniedModal from "../shared/UpdateDeleteDeniedModal/UpdateDeleteDeniedModal";
import UpdateSuccessModal from "../shared/UpdateSuccessModal/UpdateSuccessModal";
import DeleteSuccessModal from "../shared/DeleteSuccessModal/DeleteSuccessModal";

// custom hook
import useScrollToTop from "./../../hooks/useScrollToTop";

// data
import brandLogo from "./../../assets/website-logo/logo.webp";
import brandLogoWhite from "./../../assets/website-logo/logo-white.webp";
import Footer from "../shared/Footer/Footer";

function RootLayout() {
  // use the hook to always scroll to the top of the page
  useScrollToTop();

  return (
    <div className="font-default text-textPrimary min-h-screen flex flex-col">
      <Header logo={brandLogo} modifyClasses="mb-sectionGapSm" />

      {/* modals and toasts that should be visible on every page, thus placed here */}
      <LogoutToast />
      <CreationSuccessModal />
      <UpdateDeleteDeniedModal />
      <UpdateSuccessModal />
      <DeleteSuccessModal />

      {/* page component will replace outlet */}
      <Outlet />

      <Footer logo={brandLogoWhite} />
      {/* <div className="mt-auto">abcd</div> */}
    </div>
  );
}

export default RootLayout;
