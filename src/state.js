import logo from "./img/logo.svg";
import background from "./img/background.png";
import image from "./img/laptop.png";
import portfolio from "./img/devices.png";
import like from "./img/like.svg";
import award from "./img/award.svg";
import time from "./img/time.svg";
import pc from "./img/pc.svg";
import town from "./img/town.png";

import geo from "./img/geo.svg";
import phone from "./img/phone.svg";
import mail from "./img/mail.svg";

import tg from "./img/tg.svg";
import vk from "./img/vk.svg";
import inst from "./img/inst.svg";

import errorbg from "./img/desk.jpg";

const State = {
  header: {
    logo: logo,
  },
  hero: {
    title: "Web applications",
    subText: "Повседневная практика.",
    buttonText: "Спец предложение",
    buttonHref: "/",
    background: background,
  },
  about: {
    0: {
      id: 0,
      image: image,
      title: "О компании1",
      text: `
    Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.

    Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.
    
    Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.
    `,
    },
    1: {
      id: 1,
      image: image,
      title: "О компании2",
      text: `
    Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.

    Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.
    
    Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.
    `,
    },
    2: {
      id: 2,
      image: image,
      title: "О компании3",
      text: `
    Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.

    Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.
    
    Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.
    `,
    },
  },
  portfolio: {
    0: {
      img: portfolio,
      text: "Перейти на сайт",
    },
    1: {
      img: portfolio,
      text: "Перейти на сайт2",
    },
    2: {
      img: portfolio,
      text: "Перейти на сайт3",
    },
    3: {
      img: portfolio,
      text: "Перейти на сайт4",
    },
  },
  offer: {
    title: "Что мы предлагаем",
    items: [
      {
        key: 0,
        img: like,
        text: "Высокий уровень исполнения ",
      },
      {
        key: 1,
        img: award,
        text: "Гарантируем качество работы",
      },
      {
        key: 2,
        img: time,
        text: "Выполним работу быстро",
      },
      {
        key: 3,
        img: like,
        text: "Обеспечим поток заявок",
      },
      {
        key: 4,
        img: award,
        text: "Автоматизируем работу ",
      },
      {
        key: 5,
        img: time,
        text: "Разработаем уникальный дизайн",
      },
      {
        key: 6,
        img: award,
        text: "Напишем чистый код ",
      },
      {
        key: 7,
        img: like,
        text: "Контекстная реклама",
      },
      {
        key: 8,
        img: award,
        text: "Третированная реклама",
      },
      {
        key: 9,
        img: time,
        text: "SEO продвижение",
      },
      {
        key: 10,
        img: like,
        text: "Продвижение в социальных сетях",
      },
      {
        key: 11,
        img: award,
        text: "Подробнее",
        btn: true,
      },
      {
        key: 12,
        img: time,
        text: "Высокий уровень исполнения ",
      },
    ],
  },
  improve: {
    title: "Наши преимущества",
    items: [
      {
        id: 0,
        img: pc,
        text: "Сделаем адаптивный дизайн, под любой вид устройств",
      },
      {
        id: 1,
        img: pc,
        text: "Настроим все возможные способы обратной связи. Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта, подключим Whatsapp к сайту",
      },
      {
        id: 2,
        img: pc,
        text: "Установим на сайт счетчики аналитики и настроим возможность отслеживать результаты прямо с вашего мобильного телефона",
      },
      {
        id: 3,
        img: pc,
        text: "Проведем анализ вашей сферы и конкурентов, предложим лучшие инструменты для продвижения в интернете",
      },
    ],
  },
  application: {
    img: town,
    title: "Заявка",
    input1: "Ваше имя",
    input2: "Ваш Email",
    input3: "Сообщение",
    btnText: "Отправить",
    special: {
      title: "Спец предложения ",
      items: [
        {
          title: "Landing Page",
          desc: "Продающая посадочная страница. ",
          price: "150 000 ₸",
          key: 0,
        },
        {
          title: "Бизнес сайт",
          desc: "Корпоративный сайт  ",
          price: "150 000 ₸",
          key: 1,
        },
        {
          title: "Контекстная реклама",
          desc: "Запуск контекстной рекламы на месяц",
          price: "Бесплатно",
          key: 2,
        },
      ],
    },
  },
  footer: {
    items: [
      {
        title: "Пункт",
        desc: "В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.",
        li1: "Пункт",
        li2: "Пункт",
        key: 0,
      },
      {
        title: "Пункт",
        desc: "В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.",
        li1: "Пункт",
        li2: "Пункт",
        key: 1,
      },
      {
        title: "Пункт",
        desc: "В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.",
        li1: "Пункт",
        li2: "Пункт",
        key: 2,
      },
    ],
    contacts: {
      title: "Контакты",
      phoneImg: phone,
      mailImg: mail,
      geoImg: geo,
      phoneText: "+7 777 7777 77 77",
      geoText: "email@email.ru",
      mailText: "г. Москва",
    },
    icons: [tg, vk, inst],
  },
  error: {
    img: errorbg,
    title: "404",
    text: "Запрашиваемая страница не найдена",
    btnText: "Вернуться на главную",
  },
};

export default State;
