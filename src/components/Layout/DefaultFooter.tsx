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
            <img
              src="https://ojo-publico.com/sites/default/files/2023-10/GIJN-Logo-dark.png"
              alt="logo-gijn"
            />
          </div>
          <div className="logo-item__occrp">
            <img
              src="https://ojo-publico.com/sites/default/files/2024-05/logo-occrp.png"
              alt="logo-occrp"
            />
          </div>
          <div className="logo-item__capir">
            <img
              src="https://ojo-publico.com/sites/default/files/2024-07/logo-capir.png"
              alt="logo-capir"
            />
          </div>
        </div>
        <div className="default-footer__section-1">
          <div className="section__content">
            <div className="section__title">Sobre nosotros</div>
            <ul>
              <li className="section__text">
                <a href="#">Conoce a nuestro equipo</a>
              </li>
              <li className="section__text">
                <a href="#">Contáctanos</a>
              </li>
              <li className="section__text">
                <a href="#">Misión visión y valores</a>
              </li>
            </ul>
          </div>
          <div className="section__content">
            <div className="section__title">Politicas</div>
            <ul>
              <li className="section__text">
                <a href="#"></a>Independencia editorial ante nuestros aliados.
              </li>
              <li className="section__text">
                <a href="#">Sobre el secreto profesional y periodístico.</a>
              </li>
              <li className="section__text">
                <a href="#">Protección de datos personales.</a>
              </li>
              <li className="section__text">
                <a href="#">El derecho a la rectificación.</a>
              </li>
              <li className="section__text">
                <a href="#">OjoBiónico: políticas y criterios de corrección</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="default-footer__section-2">
          <div className="section__content">
            <div className="section__title">La tienda</div>
            <ul>
              <li className="section__text">
                <a href="#">Visite nuestra tienda</a>
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
            <div className="section__terms">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
              apply.
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <div className="default-footer__rights-reserved">
        <div className="rights-reserved__social">
          <div>Síganos en</div>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="rights-reserved__text">
          Todos los derechos reservados © {new Date().getFullYear()} OjoPublico.
        </div>
      </div>
    </div>
  );
};
