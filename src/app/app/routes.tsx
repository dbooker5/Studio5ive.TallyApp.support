import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/Home";
import EmptyPage from "../pages/EmptyPage";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "get-started",
        Component: Home,
      },
      {
        path: "account",
        Component: EmptyPage,
      },
      {
        path: "sales",
        Component: EmptyPage,
      },
      {
        path: "purchases",
        Component: EmptyPage,
      },
      {
        path: "inventory",
        Component: EmptyPage,
      },
      {
        path: "customers",
        Component: EmptyPage,
      },
      {
        path: "suppliers",
        Component: EmptyPage,
      },
      {
        path: "reports",
        Component: EmptyPage,
      },
      {
        path: "billing",
        Component: EmptyPage,
      },
      {
        path: "settings",
        Component: EmptyPage,
      },
      {
        path: "troubleshooting",
        Component: EmptyPage,
      },
      {
        path: ":categoryId/:articleSlug",
        Component: EmptyPage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
    ],
  },
]);