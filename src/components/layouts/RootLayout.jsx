// react-router imports
import { Outlet } from "react-router-dom";

// shared components
import Header from "../shared/Header/Header";

function RootLayout() {
  return (
    <div className="font-default">
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;
