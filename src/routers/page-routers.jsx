import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/login.jsx";
import Repository from "../pages/repository.jsx";
import Error from "../pages/error.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/repository", element: <Repository /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
