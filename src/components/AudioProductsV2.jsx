import XX99IIIMG from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99IIMG from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59IMG from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";

function AudioProductsV2() {
  return (
    <div className="audioProductsV2">
      <div className="audioProductsV2__title">YOU MAY ALSO LIKE</div>
      <div className="card">
        <img src={XX99IIIMG} alt="headphone" className="card__img" />
        <div className="card__title">XX99 MARK II</div>
        <BtnSee
          className="content__btn-see"
          link="/headphones/xx99-mark-two-headphones"
        />
      </div>

      <div className="card">
        <img src={XX99IIMG} alt="headphone" className="card__img" />
        <div className="card__title">XX99 MARK I</div>
        <BtnSee
          className="content__btn-see"
          link="/headphones/xx99-mark-one-headphones"
        />
      </div>

      <div className="card">
        <img src={XX59IMG} alt="headphone" className="card__img" />
        <div className="card__title">XX59</div>
        <BtnSee
          className="content__btn-see"
          link="/headphones/xx59-headphones"
        />
      </div>
    </div>
  );
}

export default AudioProductsV2;
