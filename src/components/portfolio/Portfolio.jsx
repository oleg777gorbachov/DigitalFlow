import React, { useEffect } from "react";
import Button from "../button/Button";
import Slider from "../slider/Slider";
import s from "./portfolio.module.css";

function Portfolio(props) {
  
  return (
    <div className={s.portfolio}>
      <div className={s.container}>
        <h3 className={s.title}>Порфолио</h3>
        <div
          className={s.img}
          style={{ background: `url(${props.image})` }}
        ></div>
        <div style={{ width: "100%", textAlign: "end" }}>
          <Button text={props.text} centermd={true} style={{ width: "100%" }} />
          <Slider
            count={props.count}
            length={props.length}
            animation={props.animation}
            func={props.func}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
