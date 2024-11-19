import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";

/* import { BrowserRouter } from "react-router-dom"; */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*  <BrowserRouter> */}
    <RouterProvider router={router} />;{/*  </BrowserRouter> */}
  </StrictMode>
);
