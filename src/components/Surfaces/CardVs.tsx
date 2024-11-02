import "../../styles/card-vs.scss";

export const CardVs = () => {
  return (
    <div>
      <div className="cardvs__container">
        <img
          src="./img/borde-top-card-p.svg"
          alt="avatar"
          style={{
            width: "160px",
            position: "relative",
            top: "-7px",
            left: "-3px",
          }}
        />
        <div className="cardvs__player">1P</div>
        <div className="cardvs__avatar">
          <img src="./img/foto.png" alt="avatar" />
        </div>
        <div className="cardvs__name">José Luna Galvez</div>
        <div className="cardvs__political-information">
          <img src="./img/img1.png" alt="img1" />

          <img src="./img/img2.png" alt="img2" />

          <img src="./img/img3.png" alt="img3" />
        </div>
        <img
          src="./img/borde-bottom-card-p.svg"
          alt="avatar"
          style={{
            width: "160px",
            position: "relative",
            bottom: "-7px",
            left: "-3px",
          }}
        />
      </div>
    </div>
  );
};
