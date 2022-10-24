import React, { useState } from "react";
import s from "./header.module.css";
import Nav from "../nav/Nav";

function Header(props) {
  const [menu, setMenu] = useState(0);

  return (
    <div className={s.container}>
      <div className={s.nav}>
        <img src={props.logo} alt="logo" className={s.logo} />
        <div
          className={s.burger}
          onClick={() => {
            menu ? setMenu(menu - 1) : setMenu(menu + 1);
          }}
        >
          <div className={`${s.line} ${s.line_first}`}></div>
          <div className={`${s.line} ${s.line_second}`}></div>
          <div className={`${s.line} ${s.line_third}`}></div>
        </div>
      </div>
      <Nav menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default Header;
