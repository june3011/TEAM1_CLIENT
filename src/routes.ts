import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: "",
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
];
