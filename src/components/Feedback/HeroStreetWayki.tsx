import { IconStreetWayki } from "../DataDisplay/IconStreetWayki";

import "../../styles/hero-street-wayki.scss";

interface HeroStreetWaykiProps {
  subtitle: string;
  principalImage: string;
}

export const HeroStreetWayki: React.FC<HeroStreetWaykiProps> = ({
  subtitle,
  principalImage,
}) => {
  return (
    <div className="hero-street-wayki">
      <div className="hero-street-wayki__street-wayki">
        <IconStreetWayki style={{ height: "100%" }} />
      </div>
      <h2 className="hero-street-wayki__subtitle">{subtitle}</h2>
      <div className="hero-street-wayki__principal-image">
        <img src={principalImage} alt="congreso-image" />
      </div>
    </div>
  );
};
