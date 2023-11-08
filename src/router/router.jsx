// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layout
import RootLayout from "../components/layouts/RootLayout";

// page components
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Registration from "./../components/pages/Registration/Registration";
import CreateAssignment from "../components/pages/CreateAssignment/CreateAssignment";
import AllAssignments from "../components/pages/AllAssignments/AllAssignments";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import UpdateAssignment from "../components/pages/UpdateAssignment/UpdateAssignment";

// route component
import PrivateRoute from "../components/route/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      { path: "/assignments", element: <AllAssignments /> },
      {
        path: "/update-assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
      },
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
