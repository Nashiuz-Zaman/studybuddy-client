// react-router imports
import { Outlet } from "react-router-dom";

// shared components
import Header from "../shared/Header/Header";
import LogoutToast from "../shared/LogoutToast/LogoutToast";

// data
import brandLogo from "./../../assets/website-logo/logo.webp";

function RootLayout() {
  return (
    <div className="font-default text-textPrimary">
      <Header logo={brandLogo} modifyClasses="mb-sectionGapSm" />
      <LogoutToast />
      <Outlet />
    </div>
  );
}

export default RootLayout;
