import { Outlet } from "react-router-dom";
import { BlackHeader } from "../components/Layout/BlackHeader";
import { DefaultFooter } from "../components/Layout/DefaultFooter";

export const MainLayout = () => {
  return (
    <>
      <BlackHeader />
      <Outlet />
      <DefaultFooter />
    </>
  );
};
