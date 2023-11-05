// react-router imports
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-default">
      <Outlet />
    </div>
  );
}

export default RootLayout;
