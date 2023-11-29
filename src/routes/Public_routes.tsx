import { Navigate, redirect } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import ErrorPage from "../error-page";
import { checkAuth } from "../services/checkAuth";
import RegisterPage from "../pages/Auth/RegisterPage";

export default function PublicRoutes() {
  return [
    {
      path: "/login",
      errorElement: <ErrorPage />,
      Component: LoginPage,
      loader: () => {
        const user = checkAuth();
        if (user) {
          return redirect('/dashboard')
        }
        return null
      }
    },
    {
      path: "/register",
      errorElement: <ErrorPage />,
      Component: RegisterPage,
    },
    {
      path: "*",
      errorElement: <ErrorPage />,
      element: <Navigate to="/login" replace />
    },
  ];
}
