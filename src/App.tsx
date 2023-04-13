import "./App.scss";
import "./assets/JetBrainsMono.ttf";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "portfolio-8b661.firebaseapp.com",
    projectId: "portfolio-8b661",
    storageBucket: "portfolio-8b661.appspot.com",
    messagingSenderId: "194119104372",
    appId: "1:194119104372:web:ba606ce3f9ceeb0c0e9e21",
    measurementId: "G-H1VEXE0DS6",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
