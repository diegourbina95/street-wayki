/* REACT COMPONENTS */
import { lazy } from "react";

import { MainLayout } from "@/layout/MainLayout.tsx";
import { Loadable } from "@/components/Feedback";
import { Routes, Route } from "react-router";

const HomePage = Loadable(lazy(() => import("@/views/public/Home/index")));

const HeritageExplorerPage = Loadable(
  lazy(() => import("@/views/public/HeritageExplorer/index"))
);
const ComponentsPage = Loadable(
  lazy(() => import("@/views/public/ComponentsPage"))
);

// ==============================|| MAIN ROUTING ||============================== //

export const PublicRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/street-wayki/" element={<HomePage />} />
      <Route
        path="/street-wayki/explorador-patrimonial"
        element={<HeritageExplorerPage />}
      />
      <Route path="/street-wayki/componentes" element={<ComponentsPage />} />
    </Route>
  </Routes>
);
