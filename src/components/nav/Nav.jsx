import React from "react";
import { Link } from "react-router-dom";
import s from "./nav.module.css";

function Nav(props) {
  return (
    <nav className={`${props.menu ? s.active : s.unactive}`}>
      <div className={s.cros} onClick={() => props.setMenu(props.menu - 1)}>
        <div className={`${s.crosline} ${s.croslinefirst}`}></div>
        <div className={`${s.crosline} ${s.croslinesecond}`}></div>
      </div>
      <ul>
        <li>
          <Link className={s.link}>Главная</Link>
        </li>
        <li>
          <Link className={s.link}>О компании</Link>
        </li>
        <li>
          <Link className={s.link}>Портфолио</Link>
        </li>
        <li>
          <Link className={s.link}>Что мы предлагаем</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
