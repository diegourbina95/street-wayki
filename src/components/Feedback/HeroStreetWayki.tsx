/* REACT COMPONENTS */
import { ButtonNes } from "@/components/Inputs";

import tituloStreetWayki from "@/assets/images/titulo_street_wayki.png";
import ilustracionStreetWayki from "@/assets/images/ilustracion_street_wayki.png";

/* LIBRARIES */

/* STYLES */
import "@/styles/hero-street-wayki.scss";

export const HeroStreetWayki = () => {
  const goToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero">
        <div className="hero__header"></div>
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
        <div className="hero__illustration">
          <img src={ilustracionStreetWayki} alt="illustration-street-wayki" />
        </div>
      </div>
    </>
  );
};
