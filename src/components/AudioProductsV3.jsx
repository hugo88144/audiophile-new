import { Link } from "react-router-dom";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import { useData } from "../Context/DataContext";
import XX99IImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import ZX9Img from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import YX1Img from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

function AudioProductsV3() {
  const { products } = useData();

  // Filter products by category
  const headphones = products.filter(
    (product) => product.category === "headphones"
  );
  const speakers = products.filter(
    (product) => product.category === "speakers"
  );
  const earphones = products.filter(
    (product) => product.category === "earphones"
  );

  return (
    <div className="overlay">
      <div className=" audioBoxV3 ">
        {/* Headphones category */}
        {headphones.length > 0 && (
          <div className="audioBoxV3__link">
            {/* Display the desktop image if it exists */}

            <img src={XX99IImg} alt="Headphones" className="audioBoxV3__img" />

            <div className="audioBoxV3__title">{headphones[0].category}</div>
            <Link to={`/${headphones[0].category}`}>
              <button className="audioBoxV3__btn">
                Shop{" "}
                <span className="audioBoxV3__arrow">
                  <img src={arrow} alt="arrow" />
                </span>
              </button>
            </Link>
          </div>
        )}

        {/* Speakers category */}
        {speakers.length > 0 && (
          <div className="audioBoxV3__link">
            <img src={ZX9Img} alt="Speakers" className="audioBoxV3__img" />

            <div className="audioBoxV3__title">{speakers[0].category}</div>
            <Link to={`/${speakers[0].category}`}>
              <button className="audioBoxV3__btn">
                Shop{" "}
                <span className="audioBoxV3__arrow">
                  <img src={arrow} alt="arrow" />
                </span>
              </button>
            </Link>
          </div>
        )}

        {/* Earphones category */}
        {earphones.length > 0 && (
          <div className="audioBoxV3__link">
            <img src={YX1Img} alt="Earphones" className="audioBoxV3__img" />

            <div className="audioBoxV3__title">{earphones[0].category}</div>
            <Link to={`/${earphones[0].category}`}>
              <button className="audioBoxV3__btn">
                Shop{" "}
                <span className="audioBoxV3__arrow">
                  <img src={arrow} alt="arrow" />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AudioProductsV3;
