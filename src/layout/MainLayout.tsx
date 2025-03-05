/* REACT COMPONENTS */
import { Outlet } from "react-router";
import { /* BlackHeader, */ DefaultFooter } from "@/components/Layout";

export const MainLayout = () => {
  return (
    <>
      {/*  <BlackHeader /> */}
      <div
        style={
          {
            /* paddingTop: "60px" */
          }
        }
      >
        <Outlet />
      </div>

      <DefaultFooter />
    </>
  );
};
