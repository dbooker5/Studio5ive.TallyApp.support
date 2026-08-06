import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import CategoryPage from "../pages/CategoryPage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import ErrorPage from "../pages/ErrorPage";

// Every category and article now comes from the Help Center API instead of
// one hardcoded route per page (previously ~90 entries here). CategoryPage
// renders any `/:categoryId` landing page and ArticleDetailPage renders any
// `/:categoryId/:articleSlug` article — both fetch their content from
// HelpCenterContext, which is fed by GET /v1/help-center/categories/active/full.
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
        path: "search",
        Component: SearchPage,
      },
      {
        path: ":categoryId",
        Component: CategoryPage,
      },
      {
        path: ":categoryId/:articleSlug",
        Component: ArticleDetailPage,
      },
    ],
  },
]);
