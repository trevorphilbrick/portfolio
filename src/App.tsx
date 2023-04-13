import "./App.scss";
import "./assets/JetBrainsMono.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage";
import PhotographyPage from "./routes/PhotographyPage";
import Navbar from "./components/Navbar";
import BlogPage from "./routes/BlogPage";
import ProjectsPage from "./routes/ProjectsPage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const firebaseConfig = {
  apiKey: "AIzaSyAUviuU68Gp7txMcVhjP4BrhHb2fR4CayA",
  authDomain: "portfolio-8b661.firebaseapp.com",
  projectId: "portfolio-8b661",
  storageBucket: "portfolio-8b661.appspot.com",
  messagingSenderId: "194119104372",
  appId: "1:194119104372:web:ba606ce3f9ceeb0c0e9e21",
  measurementId: "G-H1VEXE0DS6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics)
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
