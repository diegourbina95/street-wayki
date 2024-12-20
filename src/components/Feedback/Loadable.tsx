/* REACT COMPONENTS */
import { Suspense } from "react";

/* LIBRARIES */

/* STYLES */

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

export const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
