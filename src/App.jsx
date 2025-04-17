import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layouts/app.layout";
import { Landing } from "./pages/landing";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { RedirectLink } from "./pages/redirect-link";
import UrlProvider from "./Context";
import RequireAuth from "./components/ui/require-auth";
import { LinkPage } from "./pages/Link";

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/dashboard",
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/link/:id",
          element: (
            <RequireAuth>
              <LinkPage />
            </RequireAuth>
          ),
        },
        {
          path: "/:id",
          element: <RedirectLink />,
        },
      ],
    },
  ]);
  return (
    <UrlProvider>
      <RouterProvider router={router} />;
    </UrlProvider>
  );
};

export default App;
