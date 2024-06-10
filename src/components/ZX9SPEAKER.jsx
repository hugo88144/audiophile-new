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
        <div className="content2__title">XX99 Mark II Headphones </div>
        <p className="content2__description">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>

        <BtnSee className="content2__btn-see" />
      </div>
    </div>
  );
}

export default ZX9SPEAKER;
