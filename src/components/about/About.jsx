import React from "react";
import Slider from "../slider/Slider";
import s from "./about.module.css";

function About(props) {
  return (
    <section className={s.about}>
      <div className={s.container}>
        <div className={`${s.item} ${s.hidden}`}>
          <img src={props.image} alt="img" />
        </div>
        <div className={s.item}>
          <h3 className={s.title}>{props.title}</h3>
          <p className={s.text}>{props.text}</p>
        </div>
        <Slider
          count={props.count}
          length={props.length}
          animation={props.animation}
          func={props.func}
        />
      </div>
    </section>
  );
}

export default About;
