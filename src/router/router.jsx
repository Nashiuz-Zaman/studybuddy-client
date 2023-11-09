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
import ViewAssignment from "../components/pages/ViewAssignment/ViewAssignment";
import SubmittedAssignments from "../components/pages/SubmittedAssignments/SubmittedAssignments";

// route component
import PrivateRoute from "../components/route/PrivateRoute/PrivateRoute";

// data
import { apiBaseURL } from "../nativeData/apiBase";

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
        path: "/assignments/:id/update",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`${apiBaseURL}/assignments/${params.id}`);
        },
      },
      {
        path: "/assignments/:id/view",
        element: (
          <PrivateRoute>
            <ViewAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`${apiBaseURL}/assignments/${params.id}`);
        },
      },
      {
        path: "/submitted-assignments",
        element: (
          <PrivateRoute>
            <SubmittedAssignments />
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
