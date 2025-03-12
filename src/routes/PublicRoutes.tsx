/* REACT COMPONENTS */
import { lazy } from "react";

import { MainLayout } from "@/layout/MainLayout.tsx";
import { Loadable } from "@/components/Feedback";
import { Routes, Route } from "react-router";

const HomePage = Loadable(lazy(() => import("@/views/public/Home/index")));

const CompareOfficialsPage = Loadable(
  lazy(() => import("@/views/public/CompareOfficials/index"))
);

// ==============================|| MAIN ROUTING ||============================== //

export const PublicRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="comparar" element={<CompareOfficialsPage />} />
    </Route>
  </Routes>
);
