import Hero from "./components/Hero";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Offer from "./components/offer/Offer";
import Improve from "./components/improve/Improve";
import Application from "./components/application/Application";
import Footer from "./components/footer/Footer";
import Error from "./components/404/error";

function App(props) {
  props = props.props;

  //

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".screen").style.height = "0px";
      setTimeout(() => {
        document.querySelector(".screen").style.display = "none";
      }, 800);
    }, 200);
  }, []);

  //

  const [portfolioCounter, setPortfolioCounter] = useState(0);
  const [portfolioAnimate, setPorfolioAnimate] = useState(false);

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setPorfolioAnimate(true);
      setTimeout(() => {
        if (portfolioCounter + 1 < Object.entries(props.portfolio).length) {
          setPortfolioCounter(portfolioCounter + 1);
        } else {
          setPortfolioCounter(0);
        }
        setPorfolioAnimate(false);
      }, 400);
    }, 10000);

    return () => clearTimeout(TimeOut);
  }, [portfolioCounter]);

  //

  const [aboutCounter, setAboutCounter] = useState(0);
  const [aboutAnimate, setAboutAnimate] = useState(false);

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setAboutAnimate(true);
      setTimeout(() => {
        if (aboutCounter + 1 < Object.entries(props.about).length) {
          setAboutCounter(aboutCounter + 1);
        } else {
          setAboutCounter(0);
        }
        setAboutAnimate(false);
      }, 400);
    }, 13333);

    return () => clearTimeout(TimeOut);
  }, [aboutCounter]);

  return (
    <BrowserRouter>
      <div
        className="screen"
        style={{ height: `${window.screen.availHeight}px` }}
      ></div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero
                logo={props.header.logo}
                title={props.hero.title}
                background={props.hero.background}
                subText={props.hero.subText}
                buttonHref={props.hero.buttonHref}
                buttonText={props.hero.buttonText}
              />

              <main>
                <CSSTransition
                  in={aboutAnimate}
                  timeout={800}
                  classNames="slider"
                >
                  <About
                    title={props.about[0].title}
                    image={props.about[0].image}
                    text={props.about[0].text}
                    count={[aboutCounter, setAboutCounter]}
                    animation={[aboutAnimate, setAboutAnimate]}
                    length={Object.entries(props.about).length - 1}
                  />
                </CSSTransition>
                <CSSTransition
                  in={portfolioAnimate}
                  timeout={800}
                  classNames="slider"
                >
                  <Portfolio
                    image={props.portfolio[portfolioCounter].img}
                    text={props.portfolio[portfolioCounter].text}
                    count={[portfolioCounter, setPortfolioCounter]}
                    animation={[portfolioAnimate, setPorfolioAnimate]}
                    length={Object.entries(props.portfolio).length - 1}
                  />
                </CSSTransition>
                <Offer offer={props.offer} />
                <Improve improve={props.improve} />
                <Application app={props.application} />
                <Footer footer={props.footer} />
              </main>
            </div>
          }
        />
        <Route path="*" element={<Error error={props.error} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
