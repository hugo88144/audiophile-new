import XX99MARKICardImg from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";
function XX99MARKI() {
  return (
    <div className="XX99MARKICard">
      <div className="content2">
        <div className="content2__title">XX99 Mark I Headphones </div>
        <p className="content2__description">
          The new XX99 Mark I headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>

        <BtnSee className="content2__btn-see" />
      </div>
      <div className="XX99MARKICard__imgBox">
        <img src={XX99MARKICardImg} className="XX99MARKICard__imgBox-img" />
      </div>
    </div>
  );
}

export default XX99MARKI;
