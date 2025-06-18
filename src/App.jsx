import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./page/home.page";
import TeamPage from "./page/team.page";
import { useEffect } from "react";

const AppContent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="text-white bg-gradient-to-br from-black to-purple-900 relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppContent />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/teams", element: <TeamPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
