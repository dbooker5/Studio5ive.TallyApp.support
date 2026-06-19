import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import ArticlePage from "./pages/ArticlePage";
import SearchPage from "./pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "get-started", Component: GetStarted },
      { path: "account", Component: ArticlePage },
      { path: "sales", Component: ArticlePage },
      { path: "purchases", Component: ArticlePage },
      { path: "inventory", Component: ArticlePage },
      { path: "customers", Component: ArticlePage },
      { path: "suppliers", Component: ArticlePage },
      { path: "reports", Component: ArticlePage },
      { path: "billing", Component: ArticlePage },
      { path: "settings", Component: ArticlePage },
      { path: "troubleshooting", Component: ArticlePage },
      { path: "search", Component: SearchPage },
    ],
  },
]);
