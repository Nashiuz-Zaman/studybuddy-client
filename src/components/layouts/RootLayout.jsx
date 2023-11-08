// react-router imports
import { Outlet } from "react-router-dom";

// shared components
import Header from "../shared/Header/Header";
import LogoutToast from "../shared/LogoutToast/LogoutToast";
import AssignmentCreationSuccessModal from "../shared/AssignmentCreationSuccessModal/AssignmentCreationSuccessModal";

// data
import brandLogo from "./../../assets/website-logo/logo.webp";
import brandLogoWhite from "./../../assets/website-logo/logo-white.webp";
import Footer from "../shared/Footer/Footer";

function RootLayout() {
  return (
    <div className="font-default text-textPrimary">
      <Header logo={brandLogo} modifyClasses="mb-sectionGapSm" />

      {/* modals and toasts that should be visible on every page, thus placed here */}
      <LogoutToast />
      <AssignmentCreationSuccessModal />

      {/* page component will replace outlet */}
      <Outlet />
      <Footer logo={brandLogoWhite} />
    </div>
  );
}

export default RootLayout;
