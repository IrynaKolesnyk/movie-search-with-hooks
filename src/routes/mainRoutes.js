import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    exact: true,
    name: "home",
    component: lazy(() => import("../pages/HomePage/HomePage")),
  },
  {
    path: "/movies",
    exact: true,
    name: "movies",
    component: lazy(() => import("../pages/MoviesPage/MoviesPage")),
  },
  {
    path: "/movies/:movieId",
    exact: false,
    name: "movieDetails",
    component: lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage")),
  },
];

export default mainRoutes;
