import { createBrowserRouter } from "react-router";
import PATHS from "./constants/paths";
import HomePage from "./pages/home.page";
import AnimePage from "./pages/anime.page";
import NotFoundPage from "./pages/not-found.page";
import MangaPage from "./pages/manga.page";
import DetailsPage from "./pages/details.page";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    Component: HomePage,
  },
  {
    path: PATHS.ANIME,
    children: [
      {
        index: true,
        Component: AnimePage,
      },
      {
        path: PATHS.ANIME + PATHS.DETAILS,
        Component: DetailsPage,
      },
    ],
  },
  {
    path: PATHS.MANGA,
    children: [
      {
        index: true,
        Component: MangaPage,
      },
      {
        path: PATHS.MANGA + PATHS.DETAILS,
        Component: DetailsPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default router;
