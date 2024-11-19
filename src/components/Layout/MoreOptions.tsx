import { ButtonNes } from "../Inputs/ButtonNes";

import "../../styles/more-options.scss";
import { Link } from "react-router-dom";

export const MoreOptions = () => {
  return (
    <div className="more-options">
      <div className="more-options__content">
        <div className="more-options__item">
          <div className="more-options__text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
            gravida at vestibulum sociosqu et.
          </div>
          <Link to="componentes">
            <ButtonNes text="EXPLORAR" />
          </Link>
        </div>
        <div className="more-options__item">
          <div className="more-options__text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
            gravida at vestibulum sociosqu et.
          </div>
          <Link to="componentes">
            <ButtonNes text="LEER MAS" />
          </Link>
        </div>
      </div>
    </div>
  );
};
