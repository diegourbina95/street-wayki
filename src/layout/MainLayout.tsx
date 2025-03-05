/* REACT COMPONENTS */
import { Outlet } from "react-router";
import { DefaultFooter } from "@/components/Layout";

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <DefaultFooter />
    </>
  );
};
