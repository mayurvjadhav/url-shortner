import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layouts/app.layout";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Auth } from "./pages/Auth";
import { RedirectLink } from "./pages/Redirect-link";
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
