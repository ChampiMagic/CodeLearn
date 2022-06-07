import React, { useRef } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Navbar/navbar.module.css";
import CodeIcon from "../icons/code";
import Discord from "../icons/Discord";
import CursoIcon from "../icons/libro";

function NavBar() {
  let navBar = useRef(null);
  let logo = useRef(null);
  const gif1 = "../icons/Codelearn3.gif";
  const gif2 = "../icons/Codelearn4.gif";
  const png = "../icons/logoframe.png";

  const handleMouseEnter = () => {
    logo.current.setAttribute("src", gif1);
  };
  const handleMouseLeave = () => {
    logo.current.setAttribute("src", gif2);
  };

  return (
    <div
      ref={navBar}
      className={style.navbar}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={logo} src={png} alt="logo" className={style.logo} />
      <div className={style.icon}>
        <CursoIcon />
        <Link to="#" className={style.hide}>
          Cursos
        </Link>
      </div>
      <div className={style.icon}>
        <CodeIcon />
        <Link to="#" className={style.hide}>
          Ejercicios
        </Link>
      </div>
      <div className={style.icon}>
        <Discord />
        <Link to="#" className={style.hide}>
          Unete a Discord!
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
