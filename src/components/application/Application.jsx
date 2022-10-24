import React, { useState } from "react";
import s from "./application.module.css";

function Application(props) {
  props = props.app;
  let [nameCheck, setNameCheck] = useState("1");
  let [emailCheck, setEmailCheck] = useState("1");
  let [messageCheck, setMessageCheck] = useState("1");

  const messageWrite = (e) => {
    let value = e.target.value;
    setMessageCheck((messageCheck = value));
  };

  const emailWrite = (e) => {
    let value = e.target.value;
    setEmailCheck((emailCheck = value));
  };

  const nameWrite = (e) => {
    let value = e.target.value;
    setNameCheck((nameCheck = value));
  };

  const validation = (e) => {
    if (messageCheck.length < 20) {
      setMessageCheck((messageCheck = false));
    }
    if (nameCheck.length < 1) {
      setNameCheck((nameCheck = false));
    }
    if (emailCheck.length < 4 || !emailCheck.includes("@")) {
      setEmailCheck((emailCheck = false));
    }
  };

  const Items = props.special.items.map((e) => {
    return (
      <div className={s.item} key={e.key}>
        <div className={s.circle}></div>
        <div>
          <h3 className={s.itemTitle}>{e.title}</h3>
          <p className={s.desc}>{e.desc}</p>
        </div>
        <p className={s.price}>{e.price}</p>
      </div>
    );
  });

  return (
    <div className={s.app} style={{ background: `url(${props.img})` }}>
      <div className={`container ${s.container}`}>
        <div className={s.form}>
          <h2 className={s.title}>{props.title}</h2>
          <form>
            <div className={s.column}>
              <label htmlFor="name" className={nameCheck ? "" : s.wrong}>
                {props.input1}
              </label>
              <input
                required
                type="text"
                id="name"
                onChange={nameWrite}
              ></input>
            </div>
            <div className={s.column}>
              <label htmlFor="email" className={emailCheck ? "" : s.wrong}>
                {props.input2}
              </label>
              <input
                required
                type="email"
                id="email"
                onChange={emailWrite}
              ></input>
            </div>
            <div className={s.column}>
              <label htmlFor="message" className={messageCheck ? "" : s.wrong}>
                {props.input3}
              </label>
              <textarea
                required
                type="textarea"
                id="message"
                onChange={messageWrite}
              ></textarea>
            </div>
            <button type="submit" className={s.btn} onClick={validation}>
              Отправить
            </button>
          </form>
        </div>

        <div className={s.special}>
          <div className={s.bgBlack}></div>
          <h2 className={s.specialTitle}>{props.special.title}</h2>
          <div className={s.items}>{Items}</div>
        </div>
      </div>
    </div>
  );
}

export default Application;
