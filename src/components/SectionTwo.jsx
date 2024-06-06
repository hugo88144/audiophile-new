import sectionTwoImg from "../assets/home/desktop/image-speaker-zx9.png";
function SectionTwo() {
  return (
    <div className="sectionTwo">
      <div className="sectionTwo__box">
        <img src={sectionTwoImg} className="sectionTwo__box-img" />
        <div className="sectionTwo__title">ZX9 SPEAKER</div>
        <div className="sectionTwo__description">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>
        <button className="sectionTwo__btn">See product</button>
      </div>
      <div className="sectionTwo__img-2">
        <div className="sectionTwo__content-2">
          <div className="sectionTwo__title-2">ZX7 SPEAKER</div>
          <button className="sectionTwo__btn-2">See product</button>
        </div>
        <div className="sectionTwo__container">
          <div className="sectionTwo__img-3"></div>
          <div className="sectionTwo__box-4">
            <div className="sectionTwo__title-3">YX1 EARPHONES</div>
            <button className="sectionTwo__btn-3">See product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
