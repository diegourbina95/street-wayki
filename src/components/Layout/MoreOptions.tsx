/* REACT COMPONENTS */
import { ButtonNes } from "@/components/Inputs";

/* LIBRARIES */

/* STYLES */
import "@/styles/more-options.scss";

import imagenReportaje from "@/assets/images/Congresistas-Patrimonio1.jpg";

export const MoreOptions = () => {
  return (
    <div className="more-options">
      <div className="more-options__content">

      <div className="more-options__img">
          <img width={"400"} src={imagenReportaje} alt="reportaje" />
      </div>
      <div className="more-options__item">
          
          
      <div className="more-options__title">
      Patrimonio en fuga: congresistas se desprenden de sus bienes
          </div>
        
          
            <ButtonNes text="LEER REPORTAJE COMPLETO" href="https://ojo-publico.com/5515/patrimonio-fuga-congresistas-se-desprenden-sus-bienes" />
          
        </div>
      </div>
    </div>
  );
};
