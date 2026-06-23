import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/Home";
import EmptyPage from "../pages/EmptyPage";
import SearchPage from "../pages/SearchPage";
import GetStarted from "../pages/GetStarted";
import ArticlePage from "../pages/ArticlePage";
import ErrorPage from "../pages/ErrorPage";
import IntroductionArticle from "../pages/IntroductionArticle";
import SetupAccountArticle from "../pages/SetupAccountArticle";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "get-started",
        Component: GetStarted,
      },
      {
        path: "get-started/introduction",
        Component: IntroductionArticle,
      },
      {
        path: "get-started/setup-account",
        Component: SetupAccountArticle,
      },
      {
        path: "account",
        Component: ArticlePage,
      },
      {
        path: "sales",
        Component: ArticlePage,
      },
      {
        path: "purchases",
        Component: ArticlePage,
      },
      {
        path: "inventory",
        Component: ArticlePage,
      },
      {
        path: "payments",
        Component: ArticlePage,
      },
      {
        path: "customers",
        Component: ArticlePage,
      },
      {
        path: "suppliers",
        Component: ArticlePage,
      },
      {
        path: "reports",
        Component: ArticlePage,
      },
      {
        path: "products",
        Component: ArticlePage,
      },
      {
        path: "settings",
        Component: ArticlePage,
      },
      {
        path: "troubleshooting",
        Component: ArticlePage,
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