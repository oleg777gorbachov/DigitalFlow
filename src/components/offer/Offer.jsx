import React from "react";
import s from "./offer.module.css";
import Item from "../itemOffer/item";
import Button from "../button/Button";

function Offer(props) {
  props = props.offer;
  const Items = props.items.map((e) => {
    if (e.btn) {
      return (
        <Button
          key={e.key}
          href="#"
          text={e.text}
          styleA={true}
          style={{ textAlign: "center" }}
        />
      );
    } else {
      return <Item img={e.img} text={e.text} key={e.key} />;
    }
  });

  return (
    <div className={s.offer}>
      <div className={s.container}>
        <h3 className={s.title}>{props.title}</h3>
        <div style={{ overflow: "hidden" }}>
          <div className={s.galery}>{Items}</div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
