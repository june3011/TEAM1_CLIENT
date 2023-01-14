import { lazy, Suspense, FC } from "react";
import { Navigate, RouteObject } from "react-router";
import Loading from "./components/Loading";

const Loadable = (Component: FC) => (props: any) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

const Main = Loadable(lazy(() => import("./page/main")));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    index: true,
  },
  {
    path: "/board",
    element: "",
  },
  {
    path: "/user",
    element: "",
    children: [
      {
        path: ":useeId",
        element: "",
      },
    ],
  },
  {
    path: "*",
  },
];

export default routes;
