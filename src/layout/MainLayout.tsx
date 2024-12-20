/* REACT COMPONENTS */
import { Outlet } from "react-router-dom";
import { BlackHeader, DefaultFooter } from "@/components/Layout";

export const MainLayout = () => {
  return (
    <>
      <BlackHeader />
      <Outlet />
      <DefaultFooter />
    </>
  );
};
