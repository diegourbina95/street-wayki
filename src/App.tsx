/* import Routes from "./routes"; */
import { RouterProvider } from "react-router-dom";
/* import HomePage from "./views/public/Home"; */
import { router } from "./routes";

function App() {
  /* return <Routes />; */
  <RouterProvider router={router} />;
  /*  return <HomePage />;*/
}

export default App;
