import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./routes/Private_routes";
import PublicRoute from "./routes/Public_routes";
import { checkAuth } from "./services/checkAuth";
import { createContext, useState } from "react";
import { User, UserContextValue } from "./interfaces";

export const AuthContext = createContext<UserContextValue | null>(null);

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}')
  const [user, setUser] = useState<User | null>(currentUser)

  const router = createBrowserRouter([
    ...PublicRoute(),
    (checkAuth() ? PrivateRoute() as RouteObject : {}),
  ]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App