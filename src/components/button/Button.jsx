import React from "react";
import { Link } from "react-router-dom";
import s from "./button.module.css";

function Button(props) {
  return (
    <div
      className={props.centermd ? `${s.div} ${s.centered}` : s.div}
      style={props.style}
    >
      <Link
        to={props.href}
        className={props.styleA ? `${s.aWhite} ${s.a}` : s.a}
      >
        {props.text}
      </Link>
    </div>
  );
}

export default Button;
