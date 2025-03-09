/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { ButtonNes } from "@/components/Inputs";

import tituloStreetWayki from "@/assets/images/titulo_street_wayki.png";

/* LIBRARIES */

/* STYLES */
import "@/styles/hero-street-wayki.scss";

export const HeroStreetWayki = () => {
  const [scrollY, setScrollY] = useState(0);

  const goToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("scrollY: ", scrollY);
  return (
    <>
      <div className="hero  ">
        <div className="hero__header"></div>
        <div className="hero__bg"></div>

        <div className="hero__content">
          <div className="hero__title">
            <img src={tituloStreetWayki} alt="titulo-street-wayki" />
          </div>
          <h2 className="hero__subtitle">
            Compara la fortuna de los políticos con más poder en Perú
          </h2>
          <div className="hero__actions">
            <ButtonNes
              text="LEER MÁS"
              onClick={() => goToSection("reading-start-section")}
            />
            <ButtonNes
              text="JUGAR"
              onClick={() => goToSection("wayki-section")}
            />
          </div>
        </div>
        <div
          className="hero__illustration"
          style={{
            transform:
              scrollY < 490
                ? `translateY(${scrollY * -0.3}px)`
                : `translateY(${490 * -0.3}px)`,
          }}
        ></div>
      </div>
    </>
  );
};
