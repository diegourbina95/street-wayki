/* REACT COMPONENTS */

/* LIBRARIES */

/* STYLES */
import "@/styles/default-footer.scss";
export const DefaultFooter = () => {
  return (
    <div className="footer">
      <div className="footer__data-sources">
        <h3>Metodología y fuentes de datos:</h3>
        <p>
          Bingo electoral es una aplicación de noticias que sistematiza el
          historial político, civil y penal de los 258 postulantes a la
          presidencia de las 25 regiones y los 1.500 a las alcaldías
          provinciales del Perú. Un equipo de periodistas, analistas de datos y
          desarrolladores de OjoPúblico construyó siete bases de datos de
          diferentes fuentes y los organizó para un debido análisis e
          investigación que permitiera al usuario conocer el perfil de las
          diferentes opciones electorales en las elecciones regionales y
          municipales del próximo 2 de octubre.
        </p>
        <p>
          Las bases de datos se construyeron a través de pedidos de acceso a la
          información, extracción de datos de portales públicos vía scrapping, y
          el acceso a expedientes fiscales y judiciales.
        </p>
        <div className="footer__data-sources--hidden">
          <p>
            Las fuentes de información que se usaron son Infogob, Jurado
            Nacional de Elecciones, Oficina de contrataciones del Estado (OSCE),
            Sunat, hojas de declaraciones juradas, Autoridad Nacional del
            Servicio Civil (Servir), Contraloría General de la República. La
            herramienta utilizó hojas de cálculo y el lenguaje de programación R
            para el análisis de los datos.
          </p>
          <p>
            Para un mejor análisis y comprensión de los usuarios, en esta
            aplicación se han construido seis categorías:
          </p>
          <ul>
            <li>
              Candidatos que han postulado en elecciones anteriores: recopila el
              historial de veces que la persona ha postulado antes.
            </li>
            <li>
              Candidatos que han ocupado antes cargos públicos en el Estado:
              analiza si esta persona ha ejercido antes la función pública,
              hayan sido electos o nombrados.
            </li>
            <li>
              Candidatos con vínculos con empresas: se contemplan a los
              postulantes que son representantes legales o accionistas en
              empresas, de acuerdo a la información que se consigna en la Sunat
              o en el OSCE.
            </li>
            <li>
              Candidatos con potencial conflicto de interés: en esta categoría
              se encuentran las personas que tienen contratos con el Estado como
              personas naturales, según OSCE; o son representantes legales o
              accionistas de empresas que son proveedoras del Estado, de acuerdo
              a la información de OSCE y Sunat).
            </li>
            <li>
              Candidatos con antecedentes de riesgo: En esta categoría se
              encuentran los candidatos que tienen investigaciones fiscales en
              marcha (para el caso de gobernadores y vicegobernadores
              regionales), o que han sido hallados responsables en algún informe
              de control de la Contraloría, o que han sido sancionados por la
              Autoridad de Servicio Civil (Servir).
            </li>
            <li>
              Candidatos con sentencias penales y civiles: en esta categoría se
              encuentran los postulantes que han declarado tener una.
            </li>
          </ul>
        </div>
        <button>Leer más +</button>
      </div>
      <div className="divider"></div>
      <div className="footer__more-information">
        <div className="footer__more-information-team">
          <div
            className="footer__more-information--text"
            style={{ marginBottom: "8px" }}
          >
            Créditos:
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Coordinación y edición general:
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
              Investigación periodística:
            </span>
            <span className="footer__more-information--text">
              Gianfranco Huamán y Alexander Lavilla
            </span>
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Desarrollo y diseño web:
            </span>
            <span className="footer__more-information--text">
              Leonardo Cucho
            </span>
          </div>
          <div className="footer__more-information__group">
            <span className="footer__more-information--title">
              Ilustración:
            </span>
            <span className="footer__more-information--text">
              Rocío Urtecho
            </span>
          </div>
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
              <img
                className="allies-item__logo"
                width="85px"
                alt="Idea Internacional"
                src="https://ojo-publico.com/especiales/bingo-electoral-elecciones-regionales-municipales-2022/img/idealogo.cf0753f5.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};
