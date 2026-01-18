import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/polityka-prywatnosci",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
