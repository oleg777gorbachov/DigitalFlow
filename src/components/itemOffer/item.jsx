import React from "react";
import s from "./item.module.css";

function Item(props) {
  return (
    <div className={s.item}>
      <img src={props.img} alt="icon" className={s.img} />
      <p>{props.text}</p>
    </div>
  );
}

export default Item;
