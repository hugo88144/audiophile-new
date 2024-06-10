import ZX7SPEAKERCardImg from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";
function ZX7SPEAKER() {
  return (
    <div className="XX99MARKIICard">
      <div className="content2">
        <div className="content2__title">ZX7 SPEAKER </div>
        <p className="content2__description">
          Stream high quality sound wirelessly with minimal loss. The ZX7
          bookshelf speaker uses high-end audiophile components that represents
          the top of the line powered speakers for home or studio use.
        </p>

        <BtnSee className="content2__btn-see" link="/speakers/zx7-speaker" />
      </div>
      <div className="XX99MARKIICard__imgBox">
        <img src={ZX7SPEAKERCardImg} className="XX99MARKIICard__imgBox-img" />
      </div>
    </div>
  );
}

export default ZX7SPEAKER;
