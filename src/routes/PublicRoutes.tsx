import { lazy } from "react";

import Loadable from "../components/Feedback/Loadable.tsx";

const HomePage = Loadable(lazy(() => import("../views/public/home.tsx")));
const ComponentsPage = Loadable(
  lazy(() => import("../views/public/components.tsx"))
);

// ==============================|| MAIN ROUTING ||============================== //

const PublicRoutes = {
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "componentes",
      element: <ComponentsPage />,
    },
  ],
};

export default PublicRoutes;
