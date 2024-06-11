import ZX9cardIMG from "../assets/shared/desktop/image-zx9-speaker.jpg";
import BtnSee from "./BtnSee";

function ZX9card() {
  return (
    <div className="card">
      <div className="card__imgBox">
        <img src={ZX9cardIMG} alt="headphone" className="card__imgBox-img" />
      </div>
      <div className="card__title">ZX9 Speaker</div>
      <BtnSee
        className="content__btn-see"
        link="/headphones/ZX9card-speakers"
      />
    </div>
  );
}

export default ZX9card;
