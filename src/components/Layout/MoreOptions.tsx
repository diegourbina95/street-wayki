/* REACT COMPONENTS */
import { ButtonNes } from "@/components/Inputs";

/* LIBRARIES */

/* STYLES */
import "@/styles/more-options.scss";

export const MoreOptions = () => {
  return (
    <div className="more-options">
      <div className="more-options__content">
        <div className="more-options__item">
          <div className="more-options__text">
            Los congresistas Digna Calle (Podemos Perú), Héctor Valer (Somos
            Perú), María del Carmen Alva (no agrupada), y Jorge Montoya
            (Renovación Popular) han declarado una reducción de su patrimonio
            equivalente a entre S/1 millón y más de S/20 millones. Este año,
            Alva Prieto y Montoya Manrique fueron denunciados
            constitucionalmente por la Fiscalía de la Nación por peculado y
            aprovechamiento indebido del cargo, respectivamente. A Calle
            Lobatón, el Ministerio Público le abrió una investigación preliminar
            por lavado de activos, mientras que Valer Pinto ha afrontado
            investigaciones fiscales por corrupción y otros delitos.
          </div>
          
            <ButtonNes text="LEER REPORTAJE COMPLETO" href="https://ojo-publico.com/5515/patrimonio-fuga-congresistas-se-desprenden-sus-bienes" />
          
        </div>
      </div>
    </div>
  );
};
