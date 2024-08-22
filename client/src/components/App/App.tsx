import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../routes";
import LoaderLayout from "../layouts/LoaderLayout/LoaderLayout";

const App: FC = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<LoaderLayout />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
