import React, { useState } from "react";
import Button from "../button/Button";
import s from "./error.module.css";

function Error(props) {
  props = props.error;

  const [windowHeight, setWindowHeight] = useState(window.screen.availHeight);

  window.addEventListener("resize", () => {
    setWindowHeight(window.screen.availHeight);
  });

  return (
    <div
      className={s.error}
      style={{ background: `url(${props.img})`, height: windowHeight + "px" }}
    >
      <h1 className={s.title}>{props.title}</h1>
      <p className={s.text}>{props.text}</p>
      <Button
        text={props.btnText}
        style={{ width: "62%" }}
        styleA={true}
        href={"/"}
      />
    </div>
  );
}

export default Error;
