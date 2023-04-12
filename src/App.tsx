import "./App.scss";
import "./assets/JetBrainsMono.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <div>about page</div>,
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
