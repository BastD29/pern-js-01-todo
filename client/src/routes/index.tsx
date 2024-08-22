import { RouteObject } from "react-router-dom";
import Layout from "../components/layouts/Layout/Layout";
import { Home, NotFound, Store } from "./routes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        element: <Store />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
