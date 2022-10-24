import React from "react";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import s from "./hero.module.css";

function Hero(props) {
  return (
    <header
      className={s.Header}
      style={{ background: `url(${props.background})` }}
    >
      <div className="container">
        <Header logo={props.logo} />

        <div className={s.hero}>
          <h1 className={s.title}>{props.title}</h1>
          <div className={s.subtext}>{props.subText}</div>
          <Button
            href={props.buttonHref}
            text={props.buttonText}
            style={{ width: "36%", margin: "0 auto", display: "contents" }}
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
