import { createBrowserRouter, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login.jsx";
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import Carga from "./views/Carga/Carga.jsx";
import Profile from "./views/Profile/Profile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },

      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }

    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router;
