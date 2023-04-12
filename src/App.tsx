import "./App.scss";
import "./assets/JetBrainsMono.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage";
import PhotographyPage from "./routes/PhotographyPage";
import Navbar from "./components/Navbar";
import BlogPage from "./routes/BlogPage";
import ProjectsPage from "./routes/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/photography",
    element: <PhotographyPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
