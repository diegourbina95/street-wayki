/* REACT COMPONENTS */
import { lazy } from "react";

import { MainLayout } from "@/layout/MainLayout.tsx";
import { Loadable } from "@/components/Feedback";

const HomePage = Loadable(lazy(() => import("@/views/public/Home/index")));

const HeritageExplorerPage = Loadable(
  lazy(() => import("@/views/public/HeritageExplorer/index"))
);
const ComponentsPage = Loadable(
  lazy(() => import("@/views/public/ComponentsPage"))
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
      path: "/street-wayki/explorador-patrimonial",
      element: <HeritageExplorerPage />,
    },
    {
      path: "/street-wayki/componentes",
      element: <ComponentsPage />,
    },
  ],
};

export default PublicRoutes;
