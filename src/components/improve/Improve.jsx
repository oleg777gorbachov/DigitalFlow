import React from "react";
import s from "./improve.module.css";
import bg from "../../img/improvements.png";

function Improve(props) {
  props = props.improve;
  const Items = props.items.map((e) => {
    return (
      <div className={s.item} key={e.id}>
        <img src={e.img} className={s.img} alt="icon" />
        <p>{e.text}</p>
      </div>
    );
  });

  return (
    <div className={s.improve} style={{ background: `url(${bg})` }}>
      <div className="container">
        <h2 className={s.title}>{props.title}</h2>
        <div className={s.galery}>{Items}</div>
      </div>
    </div>
  );
}

export default Improve;
