import headphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

function AudioProducts() {
  return (
    <div className="audioBox">
      <div className="audioBox__link">
        <img src={headphonesImg} alt="Headphones" className="audioBox__img" />
        <div className="audioBox__title">Headphones</div>
        <button className="audioBox__btn">
          Shop{" "}
          <span className="audioBox__arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>

      <div className="audioBox__link">
        <img src={speakersImg} alt="Speakers" className="audioBox__img" />
        <div className="audioBox__title">Speakers</div>
        <button className="audioBox__btn">
          Shop{" "}
          <span className="audioBox__arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>

      <div className="audioBox__link">
        <img src={earphonesImg} alt="Earphones" className="audioBox__img" />
        <div className="audioBox__title">Earphones</div>
        <button className="audioBox__btn">
          Shop{" "}
          <span className="audioBox__arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default AudioProducts;
