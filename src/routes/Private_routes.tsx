import AuthLayout from "../components/AuthLayout";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../error-page";
import Layout from "../components/Layout/Layout";
import Configuracion from "../pages/Configuracion";
import EmployeesPage from "../pages/Employees";
import CreateEmployeePage from "../pages/Employees/create";
import EditEmployeePage from "../pages/Employees/editar";
import ToolsPage from "../pages/Tools";
import CreateToolPage from "../pages/Tools/create";
import ServicesPage from "../pages/Services";
import CreateServicePage from "../pages/Services/create";
import EditServicePage from "../pages/Services/editar";

export default function PrivateRoutes() {
  return {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
          },
          {
            path: "configuracion",
            Component: Configuracion,
          },
          {
            path: "empleados",
            Component: EmployeesPage,
            children: [
              {
                path: "crear",
                Component: CreateEmployeePage,
              },
              {
                path: "editar/:id",
                Component: EditEmployeePage,
              },
              {
                path: "ver/:id",
                Component: EditEmployeePage,
              },
            ]
          },
          {
            path: "herramientas",
            Component: ToolsPage,
            children: [
              {
                path: "crear",
                Component: CreateToolPage,
              },
              {
                path: "editar/:id",

              },
              {
                path: "ver/:id",

              },
            ]
          },
          {
            path: "servicios",
            Component: ServicesPage,
            children: [
              {
                path: "crear",
                Component: CreateServicePage,
              },
              {
                path: "editar/:id",
                Component: EditServicePage
              },
              {
                path: "ver/:id",
                Component: EditServicePage
              },
            ]
          },
        ]
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}