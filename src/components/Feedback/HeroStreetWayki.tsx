/* REACT COMPONENTS */
import { IconSocialNetwork } from "@/components/DataDisplay";
import { ButtonNes } from "@/components/Inputs";

import tituloStreetWayki from "@/assets/images/titulo_street_wayki.png";
import ilustracionStreetWayki from "@/assets/images/ilustracion_street_wayki.png";

/* LIBRARIES */

/* STYLES */
import "@/styles/hero-street-wayki.scss";

/* interface HeroStreetWaykiProps {
  subtitle: string;
  principalImage: string;
} */

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
      
        <div className="hero__header">
        <div className="hero__overlay"></div>    
          <img
            src="https://ojo-publico.com/especiales/migrar-latinoamerica-hemisferio-en-movimiento/img/logo.png"
            alt="logo-ojo-publico"
          />
        </div>
        <div className="hero__content">
        <div className="hero__overlay"></div>  
          <div className="hero__title">
            <img src={tituloStreetWayki} alt="titulo-street-wayki" />
          </div>
          <h2 className="hero__subtitle">
            La fortuna de los políticos con más poder en el Perú
          </h2>
          <p className="hero__introduction">
            Compara el patrimonio de la presidenta Dina Boluarte, los 130
            congresistas y los 25 gobernadores regionales.
          </p>
          <div className="hero__social-network">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/share_channel/?type=empty&source_surface=external_share"
                  target="_blank"
                >
                  <IconSocialNetwork color="#fff" type="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/intent/post?text=%23MigrarLatam%20El%20hemisferio%20en%20movimiento%3A%20un%20an%C3%A1lisis%20de%20dos%20d%C3%A9cadas%20de%20migraci%C3%B3n%20https%3A%2F%2Fojo-publico.com%2Fespeciales%2Fmigrar-latinoamerica-hemisferio-en-movimiento%20v%C3%ADa%20%40Ojo_publico&url="
                  target="_blank"
                >
                  <IconSocialNetwork color="#fff" type="twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?text=https%3A%2F%2Fojo-publico.com%2Fespeciales%2Fmigrar-latinoamerica-hemisferio-en-movimiento%0D%0A%0D%0A"
                  target="_blank"
                >
                  <IconSocialNetwork color="#fff" type="whatsapp" />
                </a>
              </li>
            </ul>
          </div>
          <p className="hero__date">
            <strong>Marzo de 2025</strong>
          </p>
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
