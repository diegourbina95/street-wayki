import { lazy } from "react";

import { MainLayout } from "../layout/MainLayout.tsx";
import Loadable from "../components/Feedback/Loadable.tsx";

const HomePage = Loadable(lazy(() => import("../views/public/Home/index.tsx")));
const ComponentsPage = Loadable(
  lazy(() => import("../views/public/Components.tsx"))
);

// ==============================|| MAIN ROUTING ||============================== //

const PublicRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: "/street-wayki/",
      element: <HomePage />,
    },
    {
      path: "/street-wayki/componentes",
      element: <ComponentsPage />,
    },
  ],
};

export default PublicRoutes;