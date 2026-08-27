import { createBrowserRouter, Navigate } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import CategoryPage from "../pages/CategoryPage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import ErrorPage from "../pages/ErrorPage";
import AdminLayout from "../admin/AdminLayout";
import CategoriesListPage from "../admin/CategoriesListPage";
import CategoryFormPage from "../admin/CategoryFormPage";
import ArticlesListPage from "../admin/ArticlesListPage";
import ArticleFormPage from "../admin/ArticleFormPage";

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
  {
    path: "/admin",
    Component: AdminLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/admin/categories" replace /> },
      { path: "categories", Component: CategoriesListPage },
      { path: "categories/new", Component: CategoryFormPage },
      { path: "categories/:id/edit", Component: CategoryFormPage },
      { path: "articles", Component: ArticlesListPage },
      { path: "articles/new", Component: ArticleFormPage },
      { path: "articles/:id/edit", Component: ArticleFormPage },
    ],
  },
]);
