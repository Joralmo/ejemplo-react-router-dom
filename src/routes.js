import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { ErrorPage } from "./ErrorPage";
import { User } from "./User";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/user/:id",
    Component: User,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
