import React from "react";
import s from "./slider.module.css";

function Slider(props) {
  let Items = [];
  for (let i = 0; i <= props.length; i++) {
    Items.push(i);
  }
  
  const func = (e) => {
    props.animation[1](true);
    setTimeout(() => {
      props.count[1](parseInt(e.target.dataset.key));
      props.animation[1](false);
    }, 400);
  };

  return (
    <div className={s.slider}>
      {Items.map((e) => {
        if (e === props.count[0]) {
          return (
            <div
              className={`${s.itemActive} ${s.item}`}
              key={e}
              data-key={e}
            ></div>
          );
        } else {
          return (
            <div className={s.item} key={e} onClick={func} data-key={e}></div>
          );
        }
      })}
    </div>
  );
}

export default Slider;
