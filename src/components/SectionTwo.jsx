import sectionTwoImg from "../assets/home/desktop/image-speaker-zx9.png";
import rings from "../assets/home/desktop/pattern-circles.svg";
import sectionTwoImg2 from "../assets/home/desktop/image-speaker-zx7.jpg";
import BtnSee from "./BtnSee";
function SectionTwo() {
  return (
    <div className="sectionTwo">
      <div className="sectionTwo__box">
        <img src={sectionTwoImg} className="sectionTwo__box-img" />
        <img src={rings} className="sectionTwo__rings" />
        <div className="sectionTwo__title">ZX9 SPEAKER</div>
        <div className="sectionTwo__description">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>

        <BtnSee className="sectionTwo__btn" />
      </div>

      <div className="sectionTwo__box-2">
        <img src={sectionTwoImg2} className="sectionTwo__img-2" />
        <div className="sectionTwo__title-2">ZX7 SPEAKER</div>
        <BtnSee className="sectionTwo__btn-2" />
      </div>

      <div className="sectionTwo__container">
        <div className="sectionTwo__img-3"></div>
        <div className="sectionTwo__box-4">
          <div className="sectionTwo__title-3">YX1 EARPHONES</div>
          <BtnSee className="sectionTwo__btn-2" />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
