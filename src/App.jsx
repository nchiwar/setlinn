import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Home } from "./pages";
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
          path: "about-us",
          element: <AboutUs />,
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
