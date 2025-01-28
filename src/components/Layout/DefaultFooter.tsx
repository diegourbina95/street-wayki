/* REACT COMPONENTS */

/* LIBRARIES */

/* STYLES */
import "@/styles/default-footer.scss";
export const DefaultFooter = () => {
  return (
    <div className="default-footer">
      <div className="default-footer__information">
        <div className="default-footer__logos">
          <div className="logo-item__light">
            <img
              src="https://ojo-publico.com/themes/custom/ojo_publico_theme/images/logos/logo-light-default.svg"
              alt="logo-light"
            />
          </div>
          <div className="logo-item__gijn">
            <a href="https://gijn.org/" target="_blank">
              <img
                src="https://ojo-publico.com/sites/default/files/2023-10/GIJN-Logo-dark.png"
                alt="logo-gijn"
              />
            </a>
          </div>
          <div className="logo-item__occrp">
            <a href="https://www.occrp.org/en" target="_blank">
              <img
                src="https://ojo-publico.com/sites/default/files/2024-05/logo-occrp.png"
                alt="logo-occrp"
              />
            </a>
          </div>
          <div className="logo-item__capir">
            <a href="https://www.capir.net/" target="_blank">
              <img
                src="https://ojo-publico.com/sites/default/files/2024-07/logo-capir.png"
                alt="logo-capir"
              />
            </a>
          </div>
        </div>
        <div className="default-footer__section-1">
          <div className="section__content">
            <div className="section__title">Sobre nosotros</div>
            <ul>
              <li className="section__text">
                <a href="https://ojo-publico.com/institucional/#equipo">
                  Conoce a nuestro equipo
                </a>
              </li>
              <li className="section__text">
                <a href="https://ojo-publico.com/contacto">Contáctanos</a>
              </li>
              <li className="section__text">
                <a href="https://ojo-publico.com/institucional/mision-vision-valores">
                  Misión visión y valores
                </a>
              </li>
            </ul>
          </div>
          <div className="section__content">
            <div className="section__title">Politicas</div>
            <ul>
              <li className="section__text">
                <a href="https://ojo-publico.com/institucional/politica_de_independencia_editorial_ante_aliados"></a>
                Independencia editorial ante nuestros aliados.
              </li>
              <li className="section__text">
                <a href="https://ojo-publico.com/institucional/politica_de_cumplimiento_de_la_ley">
                  Sobre el secreto profesional y periodístico.
                </a>
              </li>
              <li className="section__text">
                <a href="https://ojo-publico.com/institucional/politica-de-proteccion-de-datos-personales">
                  Protección de datos personales.
                </a>
              </li>
              <li className="section__text">
                <a href="https://ojo-publico.com/institucional/politica_de_rectificacion">
                  El derecho a la rectificación.
                </a>
              </li>
              <li className="section__text">
                <a href="https://ojo-publico.com/institucional/ojo_bionico_politicas_verificacion">
                  OjoBiónico: políticas y criterios de corrección
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="default-footer__section-2">
          <div className="section__content">
            <div className="section__title">La tienda</div>
            <ul>
              <li className="section__text">
                <a href="https://tienda.ojo-publico.com/">
                  Visite nuestra tienda
                </a>
              </li>
            </ul>
          </div>
          <div className="section__content">
            <div className="section__title">Suscríbase</div>
            <p className="section__text text-grey">
              Suscríbase a nuestro newsletter para estar al día con las últimas
              noticias.
            </p>
            <input type="text" placeholder="Correo electrónico" />
            <div></div>
            <button className="section__button">suscribirse</button>
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <div className="default-footer__rights-reserved">
        <div className="rights-reserved__content">
          <div className="rights-reserved__social">
            <div>Síganos en</div>
            <ul>
              <li>
                <a href="https://www.instagram.com/ojopublico/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="https://twitter.com/Ojo_Publico" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://es-la.facebook.com/OjoPublico/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/OjoP%C3%BAblicoPE"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@ojopublico" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="rights-reserved__text">
            Todos los derechos reservados © {new Date().getFullYear()}{" "}
            OjoPublico.
          </div>
        </div>
      </div>
    </div>
  );
};
