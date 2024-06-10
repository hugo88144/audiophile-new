import YX1CardImg from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";
function YX1() {
  return (
    <div className="XX99MARKIICard">
      <div className="XX99MARKIICard__imgBox">
        <img src={YX1CardImg} className="XX99MARKIICard__imgBox-img" />
      </div>
      <div className="content2">
        <div className="content2__title">YX1 WIRELESS EARPHONES </div>
        <p className="content2__description">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>

        <BtnSee
          className="content2__btn-see"
          link="/earphones/yx1-wireless-earphones"
        />
      </div>
    </div>
  );
}

export default YX1;