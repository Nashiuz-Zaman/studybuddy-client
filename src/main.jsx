// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// react router import
import { RouterProvider } from "react-router-dom";

// router import
import router from "./router/router";

// provider import
import AuthProvider from "./Providers/AuthProvider";
import LoginRegistratonProvider from "./Providers/LoginRegistrationProvider";
import LogoutProvider from "./Providers/LogoutProvider";
import AssignmentStatusProvider from "./Providers/AssignmentStatusProvider";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LoginRegistratonProvider>
        <LogoutProvider>
          <AssignmentStatusProvider>
            <RouterProvider router={router}></RouterProvider>
          </AssignmentStatusProvider>
        </LogoutProvider>
      </LoginRegistratonProvider>
    </AuthProvider>
  </React.StrictMode>
);
