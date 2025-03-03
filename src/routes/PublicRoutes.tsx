/* REACT COMPONENTS */
import { lazy } from "react";

import { MainLayout } from "@/layout/MainLayout.tsx";
import { Loadable } from "@/components/Feedback";
import { Routes, Route } from "react-router";

const HomePage = Loadable(lazy(() => import("@/views/public/Home/index")));

const HeritageExplorerPage = Loadable(
  lazy(() => import("@/views/public/HeritageExplorer/index"))
);
const CompareOfficialsPage = Loadable(
  lazy(() => import("@/views/public/CompareOfficials/index"))
);
/* const ComponentsPage = Loadable(
  lazy(() => import("@/views/public/ComponentsPage"))
); */

// ==============================|| MAIN ROUTING ||============================== //

export const PublicRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="explorador-patrimonial" element={<HeritageExplorerPage />} />
      <Route path="comparar" element={<CompareOfficialsPage />} />
      {/* <Route path="componentes" element={<ComponentsPage />} /> */}
    </Route>
  </Routes>
);
