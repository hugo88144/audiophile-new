import ZX9SPEAKERCardImg from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";
function ZX9SPEAKER() {
  return (
    <div className="XX99MARKIICard">
      <div className="XX99MARKIICard__imgBox">
        <img src={ZX9SPEAKERCardImg} className="XX99MARKIICard__imgBox-img" />
      </div>
      <div className="content2">
        <div className="content2__new">New product </div>
        <div className="content2__title">
          ZX9 <br /> SPEAKER{" "}
        </div>
        <p className="content2__description">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>

        <BtnSee className="content2__btn-see" link="/speakers/zx9-speaker" />
      </div>
    </div>
  );
}

export default ZX9SPEAKER;
