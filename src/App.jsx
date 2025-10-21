import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  DashboardLayout,
  Home,
  CampusTour,
  Resource,
  Community,
  Category,
  BlogPost,
  JourneyTracker,
  ResetPassword,
  Feed,
  AdminPanel,
  CityHub,
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3,
  OnboardingStep4,
  OnboardingStep5,
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
          path: "onboarding/step-1",
          element: <OnboardingStep1 />,
        },
        {
          path: "onboarding/step-2",
          element: <OnboardingStep2 />,
        },
        {
          path: "onboarding/step-3",
          element: <OnboardingStep3 />,
        },
        {
          path: "onboarding/step-4",
          element: <OnboardingStep4 />,
        },
        {
          path: "onboarding/step-5",
          element: <OnboardingStep5 />,
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
          path: "city-hub",
          element: <CityHub />,
        },
        {
          path: "community/category/:slug",
          element: <Category />,
        },
        {
          path: "blog-post",
          element: <BlogPost />,
        },
        {
          path: "journey-tracker",
          element: <JourneyTracker />,
        },

        {
          path: "admin",
          element: <AdminPanel />,
        },
      ],
    },

    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [{ index: true, element: <Community /> }, {
          path: "/dashboard/campus-tour",
          element: <CampusTour />,
        },
        { path: "/dashboard/resource",         
          element: <Resource />,
        },
        { path: "/dashboard/city-hub",         
          element: <CityHub />,
        },   
       ],
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
