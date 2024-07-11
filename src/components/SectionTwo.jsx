import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";
import sectionTwoImg from "../assets/home/desktop/image-speaker-zx9.png";
import rings from "../assets/home/desktop/pattern-circles.svg";

import BtnSee from "./BtnSee";

function SectionTwo() {
  const { products, loading, error } = useData();

  if (loading) return null;
  if (error) return null;

  ///forced to remove middle word since the data given is not in the correct format
  const removeMiddleWord = (name) => {
    const words = name.split(" ");
    // Assuming words array has exactly 3 elements
    if (words.length === 3) {
      // Remove the middle word (index 1)
      words.splice(1, 1);
    }
    return words.join(" ");
  };
  return (
    <div className="sectionTwo">
      <div className="sectionTwo__box">
        <img src={sectionTwoImg} className="sectionTwo__box-img" />
        <img src={rings} className="sectionTwo__rings" />
        <div className="sectionTwo__title">{products[5].name}</div>
        <div className="sectionTwo__description">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>

        <BtnSee className="sectionTwo__btn" link="/speaker/zx9-speaker" />
      </div>

      <div className="sectionTwo__box-2">
        <div className="sectionTwo__img-2"></div>
        <div className="sectionTwo__title-2">{products[4].name}</div>
        <BtnSee className="sectionTwo__btn-2" link="/speaker/zx7-speaker" />
      </div>

      <div className="sectionTwo__box-3">
        <div className="sectionTwo__imgbox">
          <div className="sectionTwo__imgbox-4"></div>
        </div>

        <div className="sectionTwo__box-4">
          <div>
            <div className="sectionTwo__title-3">
              {products.length > 0 && removeMiddleWord(products[0].name)}
            </div>
            <BtnSee
              className="sectionTwo__btn-2 sectionTwo__btn-3"
              link="/earphones/YX1-earphones"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
