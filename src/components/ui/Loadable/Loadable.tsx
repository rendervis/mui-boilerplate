import { Suspense, ComponentType, ReactNode } from "react";
// project imports
import Loader from "./Loader";

// define type
type LoadableProps<P extends object> = P & { children?: ReactNode };

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: LoadableProps<P>) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
