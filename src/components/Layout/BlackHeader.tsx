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
          <a href="https://ojo-publico.com/" target="_blank">
            <img
              src="https://ojo-publico.com/especiales/migrar-latinoamerica-hemisferio-en-movimiento/img/logo.png"
              alt="logo-ojo-plublico"
            />
          </a>
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
                <a href="#" className="nav-link text-light add-bookmark">
                  <i
                    className="fa-regular fa-bookmark"
                    style={{ marginRight: "5px" }}
                  ></i>
                  <div id="bookmark"></div>
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
            <i
              className="fa-regular fa-bookmark"
              style={{ marginRight: "5px" }}
            >
              <div id="bookmark"></div>
            </i>
            <a href="#">
              {" "}
              <div id="bookmark" style={{ display: "inline" }}>
                Bookmark
              </div>
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
    </nav>
  );
};
