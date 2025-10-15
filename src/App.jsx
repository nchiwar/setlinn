import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  DashboardLayout,
  Home,
  CampusTour,
  Resource,
  Community,
  BlogPost,
  JourneyTracker,
  ResetPassword,
  Feed,
} from "./pages";
import ProtectedRoute from "@components/protected-route/ProtectedRoute";
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

    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "feed",
          element: <DashboardLayout />,
          children: [{ index: true, element: <Feed /> }],
        },
      ],
    },

    {
      path: "reset-password",
      element: <ResetPassword />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
