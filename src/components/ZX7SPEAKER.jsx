import ZX7SPEAKERCardImg from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";
function ZX7SPEAKER() {
  return (
    <div className="XX99MARKIICard">
      <div className="content2">
        <div className="content2__new">New product </div>
        <div className="content2__title">XX99 Mark II Headphones </div>
        <p className="content2__description">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>

        <BtnSee className="content2__btn-see" />
      </div>
      <div className="XX99MARKIICard__imgBox">
        <img src={ZX7SPEAKERCardImg} className="XX99MARKIICard__imgBox-img" />
      </div>
    </div>
  );
}

export default ZX7SPEAKER;
