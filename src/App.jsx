import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./page/home.page";
import TeamPage from "./page/team.page";

const AppContent = () => {
  return (
    <div className="text-white bg-gradient-to-br from-black to-purple-900 min-h-screen relative scroll-smooth">
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
        { path: "/team", element: <TeamPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
