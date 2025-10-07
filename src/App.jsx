import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Home,
  CampusTour,
  Resource,
  Community,
  BlogPost,
  JourneyTracker,
} from "./pages";
import "@styles/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "campus-tour",
          element: <CampusTour />,
        },
        {
          path: "resource",
          element: <Resource />,
        },
        {
          path: "community",
          element: <Community />,
        },
        {
          path: "blog-post",
          element: <BlogPost />,
        },
        {
          path: "journey-tracker",
          element: <JourneyTracker />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
