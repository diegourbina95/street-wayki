/* REACT COMPONENTS */
import "@/styles/default-footer.scss";
import { ButtonNes } from "@/components/Inputs";

/* LIBRARIES */

/* STYLES */

import { useState } from "react";
export const DefaultFooter = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <div className="footer">
      <div className="footer__data-sources">
        <h3>Metodología y fuentes de datos:</h3>
        <p>
          “Street waykis” es una aplicación que permite conocer y comparar los
          ingresos de los políticos con más poder en el Perú. Esta herramienta
          fue creada por un equipo multidisciplinario, conformado por
          periodistas, desarrolladores y analistas de datos, que elaboraron una
          base de datos con la información de la presidenta de la República,
          Dina Boluarte, los 130 congresistas y los 25 gobernadores.
        </p>
        <p>
          Las bases de datos se construyeron a través de pedidos de acceso a la
          información, extracción de datos de portales públicos vía scrapping, y
          el acceso a expedientes fiscales y judiciales.
        </p>
        <div
          className={`footer__data-sources__accordion${toggle ? "--show" : ""}`}
        >
          <p>
            Para elaborar la base de datos, se revisaron las declaraciones
            juradas de bienes y rentas de 156 funcionarios públicos elegidos por
            el voto popular, presentadas a la Contraloría General de la
            República, entre los años 2021 y 2024. También se recopilaron los
            antecedentes de cada uno de estos políticos, relacionados con
            investigaciones fiscales, procesos judiciales, denuncias y
            cuestionamientos formulados en diversas instancias.
          </p>
          <p>Fuentes de datos:</p>
          <ul>
            <li>Contraloría General de la República</li>
            <li>Superintendencia Nacional de Registros Públicos </li>
            <li>Superintendencia Nacional de Migraciones</li>
            <li>Procuraduría General del Estado</li>
            <li>Congreso de la República</li>
            <li>
              Superintendencia Nacional de Aduanas y de Administración
              Tributaria
            </li>
            <li>Organismo Supervisor de las Contrataciones del Estado</li>
          </ul>
        </div>
        <ButtonNes
                  text={toggle ? "Cerrar x" : "Leer más +"}
                  onClick={handleToggle}
                />
      </div>
      <div className="divider"></div>
      <div className="footer__more-information">
        <div className="footer__more-information__team">
          <div
            className="footer__more-information--text"
            style={{ marginBottom: "8px" }}
          >
            Créditos:
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Dirección periodística:
            </span>
            <span>Nelly Luna Amancio</span>
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Análisis de datos:
            </span>
            <span className="footer__more-information--text">
              Gianfranco Huamán
            </span>
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Investigación periodística
            </span>
            <span className="footer__more-information--text">
              Elena Miranda, Gianfranco Huamán
            </span>
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Concepto visual y diseño:
            </span>
            <span className="footer__more-information--text">
              Alejandra Arevalo
            </span>
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Desarrollo web:
            </span>
            <span className="footer__more-information--text">
              Diego Paredes
            </span>
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Ilustración:
            </span>
            <span className="footer__more-information--text">
              Jhafet Pianchachi
            </span>
          </div>
          <p>*En el inicio de esta de investigación participó Delsy Loyola</p>
        </div>
        <div className="footer__more-information__allies">
          <div className="allies-item">
            <span className="allies-item__title">Un proyecto de:</span>
            <img
              className="allies-item__logo"
              width="200px"
              alt="Ojo púbico"
              src="https://ojo-publico.com/themes/custom/ojo_publico_theme/images/logos/logo-light-default.svg"
            />
          </div>
          <div className="allies-item">
            <span className="allies-item__title">Con el apoyo de:</span>
            <div>
              <img
                className="allies-item__logo"
                width="120px"
                alt="Idea Internacional"
                src="https://ojo-publico.com/especiales/bingo-electoral-elecciones-regionales-municipales-2022/img/Logo-aliados.4ea70a5e.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};
