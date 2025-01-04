/* REACT COMPONENTS */
import { Outlet } from "react-router";
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
