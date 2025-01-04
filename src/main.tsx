import { createRoot } from "react-dom/client";
import { PublicRoutes } from "./routes/index.tsx";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <PublicRoutes />
  </HashRouter>
);
