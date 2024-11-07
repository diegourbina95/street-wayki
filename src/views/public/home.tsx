import { HeroStreetWayki } from "../../components/Feedback/HeroStreetWayki";
import { MoreOptions } from "../../components/Layout/MoreOptions";

import congresoImage from "../../assets/images/congreso.png";

import "../../styles/home-page.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__hero">
        <HeroStreetWayki
          subtitle="El incremento patrimonial"
          principalImage={congresoImage}
        />
      </div>
      <div className="home-page__information content-550">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
          gravida at vestibulum sociosqu et. Conubia habitasse dui mollis,
          facilisis purus dictumst. Nec dictum aliquam sagittis elementum ante
          pulvinar? Eleifend dignissim hendrerit sodales sagittis congue class
          montes volutpat maecenas. Per justo egestas interdum senectus, etiam
          tempor fusce non.
        </p>
        <p>
          Ridiculus nibh leo arcu blandit tortor nunc porta. Nascetur donec
          mauris ultricies accumsan justo imperdiet? Leo integer risus sociosqu
          nec elementum etiam. Sollicitudin fames morbi nunc senectus donec.
          Accumsan luctus volutpat finibus neque rhoncus est donec. Velit
          elementum sollicitudin condimentum posuere augue mauris. Donec
          placerat vehicula sed id purus.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
          gravida at vestibulum sociosqu et. Conubia habitasse dui mollis,
          facilisis purus dictumst. Nec dictum aliquam sagittis elementum ante
          pulvinar? Eleifend dignissim hendrerit sodales sagittis congue class
          montes volutpat maecenas. Per justo egestas interdum senectus, etiam
          tempor fusce non.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
          gravida at vestibulum sociosqu et. Conubia habitasse dui mollis,
          facilisis purus dictumst. Nec dictum aliquam sagittis elementum ante
          pulvinar? Eleifend dignissim hendrerit sodales sagittis congue class
          montes volutpat maecenas. Per justo egestas interdum senectus, etiam
          tempor fusce non.
        </p>
      </div>
      <div className="home-page__wayki-selector content-550">
        Seleccionar Wayki
      </div>
      <div className="home-page__more-options">
        <MoreOptions />
      </div>
    </div>
  );
};

export default HomePage;
