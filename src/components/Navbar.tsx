import { AiOutlineMenu } from "react-icons/ai";
import "../css/Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        backgroundColor: isVisible ? "#202020" : "transparent",
        height: "96px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease-in-out",
        boxShadow: isVisible ? "rgba(166, 0, 0, 0.5)   0px 1px  12px" : "none",
      }}
    >
      {isVisible ? (
        <div className="navbar-left-container">
          <ul className="navbar-list">
            <Link to={`blog`}>Blog</Link>
            <li>Projects</li>
            <li>Photography</li>
            <li>
              {/* <a href={"/dashboard"}>Dashboard</a> */}
              <Link to={`dashboard`}>Dashboard</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}

      <div className="navbar-right-container">
        <AiOutlineMenu
          className="navbar-menu"
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
    </nav>
  );
};
export default Navbar;
