import { createBrowserRouter } from "react-router-dom";

import { AboutPage } from "@pages/AboutPage";
import { CollectionPage } from "@pages/CollectionPage";
import { HomePage } from "@pages/HomePage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { RootLayout } from "@app/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: 'collections/:id/public',
        element: <CollectionPage />
      }
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);
