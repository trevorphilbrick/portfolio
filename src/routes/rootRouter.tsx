import { createBrowserRouter } from "react-router-dom";
import HomePage from "../screens/HomePage";
import PhotographyPage from "../screens/PhotographyPage";
import BlogPage from "../screens/BlogPage";
import ProjectsPage from "../screens/ProjectsPage";
import Dashboard from "../screens/Dashboard";
import LoginPage from "../screens/LoginPage";
import App from "../App";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "photography",
        element: <PhotographyPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default rootRouter;
