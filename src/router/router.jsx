// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layout
import RootLayout from "../components/layouts/RootLayout";

// page components
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Registration from "./../components/pages/Registration/Registration";
import CreateAssignment from "../components/pages/CreateAssignment/CreateAssignment";

// route component
import PrivateRoute from "../components/route/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      {
        path: "/create-assignments",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
