/* REACT COMPONENTS */
import { useState } from "react";
import { ojoPublicoLinks } from "@/utils/constants";

/* LIBRARIES */

/* STYLES */
import "@/styles/black-header.scss";

export const BlackHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleActive = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <nav className="black-header">
      <div className="black-header__flex">
        <div className="black-header__logo">
          <img
            src="https://ojo-publico.com/especiales/especial-interno-op-test/assets/img/logo-light-10-anos-ojopublico.svg"
            alt="logo-ojo-plublico"
          />
        </div>
        <div className="black-header__nav">
          <div className="black-header__nav-mobile">
            <div className="black-header__nav-button-hover">
              <div className="black-header__nav-button" onClick={toggleActive}>
                <span className="black-header__nav-toggler-icon"></span>
              </div>
            </div>
          </div>
          <div className="black-header__nav-desktop">
            <ul>
              <li>
                <a href="#">
                  <span
                    className="fa fa-bookmark-o"
                    style={{ marginRight: "5px" }}
                  ></span>
                </a>
              </li>
              <li>
                <a href={ojoPublicoLinks.LOGIN}>Iniciar Sesión</a>
              </li>
              <li className="black-header__ally-button">
                <a href={ojoPublicoLinks.PARTNERS}>Hazte Aliado/a</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        id="list-roll-down"
        className={`black-header__hamburger-content ${
          toggle ? "is-active" : ""
        }`}
      >
        <ul>
          <li>
            <span
              className="fa fa-bookmark-o"
              style={{ marginRight: "5px" }}
            ></span>
            <a href="#">Bookmark</a>
          </li>
          <li>
            <a href={ojoPublicoLinks.LOGIN}>Iniciar Sesión</a>
          </li>
          <li className="black-header__ally-button">
            <a href={ojoPublicoLinks.PARTNERS}>Hazte Aliado/a</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
