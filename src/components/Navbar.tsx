import { AiOutlineMenu } from "react-icons/ai";
import '../css/Navbar.scss'
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);


  return (
    <nav
      className="navbar"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 100, backgroundColor: isVisible ? "#202020" : "transparent", height: '96px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.3s ease-in-out', boxShadow: isVisible ? 'rgba(166, 0, 0, 0.5)   0px 1px  12px' : 'none' }}
    >
      <div className="navbar-left-container" >        
      </div>
      <div className="navbar-right-container">
      <AiOutlineMenu className="navbar-menu" onClick={() => setIsVisible(!isVisible)}/>
      </div>
    </nav>
  );
};
export default Navbar;
