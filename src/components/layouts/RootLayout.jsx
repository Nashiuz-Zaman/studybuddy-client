// react-router imports
import { Outlet } from "react-router-dom";

// shared components
import Header from "../shared/Header/Header";

// data
import brandLogo from "./../../assets/website-logo/logo.webp";

function RootLayout() {
  return (
    <div className="font-default">
      <Header logo={brandLogo} />
      <Outlet />
    </div>
  );
}

export default RootLayout;
