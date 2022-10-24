import React from "react";
import s from "./footer.module.css";

function Footer(props) {
  props = props.footer;

  const ContactItem = (props) => {
    return (
      <div className={s.list} key={props.id}>
        <img src={props.img} alt="icon" className={s.icon} />
        <p>{props.text}</p>
      </div>
    );
  };

  const Items = props.items.map((e) => {
    return (
      <div className={s.item} key={e.key}>
        <h3>{e.title}</h3>
        <p>{e.desc}</p>
        <p>{e.li1}</p>
        <p>{e.li2}</p>
      </div>
    );
  });
  return (
    <footer>
      <div className="container">
        <div className={s.items}>
          {Items}
          <div className={s.item}>
            <h3>{props.contacts.title}</h3>
            <ContactItem
              text={props.contacts.phoneText}
              img={props.contacts.phoneImg}
              id={0}
            />
            <ContactItem
              text={props.contacts.mailText}
              img={props.contacts.mailImg}
              id={1}
            />
            <ContactItem
              text={props.contacts.geoText}
              img={props.contacts.geoImg}
              id={2}
            />
          </div>
        </div>
        <div className={s.footerUnder}>
          <h3 className={s.title}>digital flow</h3>
          <div className={s.icoGalery}>
            {props.icons.map((e) => {
              return (
                <div className={s.ico} key={e}>
                  <img src={e} alt="icon" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
