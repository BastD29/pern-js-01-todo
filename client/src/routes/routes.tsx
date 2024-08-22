import { FC, LazyExoticComponent, lazy } from "react";

const Store: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Store/Store")
);

const Home: LazyExoticComponent<FC> = lazy(() => import("../pages/Home/Home"));

const NotFound: LazyExoticComponent<FC> = lazy(
  () => import("../pages/NotFound/NotFound")
);

export { Store, Home, NotFound };
