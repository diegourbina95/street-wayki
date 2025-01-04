import { createRoot } from "react-dom/client";
/* import { RouterProvider } from "react-router-dom"; */
import { PublicRoutes } from "./routes/index.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/street-wayki">
    <PublicRoutes />
  </BrowserRouter>
);
