/* REACT COMPONENTS */
import { IconNav } from "@/components/DataDisplay";

import logoOjoPublico from "@/assets/images/logo-ojo-plublico.png";

/* LIBRARIES */

/* STYLES */
import "@/styles/black-header.scss";

export const BlackHeader = () => {
  return (
    <div className="black-header">
      <div className="black-header__logo">
        <img src={logoOjoPublico} alt="logo-ojo-plublico" />
      </div>
      <div className="black-header__nav">
        <IconNav style={{ height: "20px" }} />
      </div>
    </div>
  );
};
