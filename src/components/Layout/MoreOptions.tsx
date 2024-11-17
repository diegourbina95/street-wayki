import { ButtonNes } from "../Inputs/ButtonNes";

import "../../styles/more-options.scss";

export const MoreOptions = () => {
  return (
    <div className="more-options">
      <div className="more-options__content">
        <div className="more-options__item">
          <div className="more-options__text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
            gravida at vestibulum sociosqu et.
          </div>
          <ButtonNes text="EXPLORAR" />
        </div>
        <div className="more-options__item">
          <div className="more-options__text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
            gravida at vestibulum sociosqu et.
          </div>
          <ButtonNes text="LEER MAS" />
        </div>
      </div>
    </div>
  );
};
