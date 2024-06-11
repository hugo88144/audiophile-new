import ZX7cardIMG from "../assets/shared/desktop/image-zx7-speaker.jpg";
import BtnSee from "./BtnSee";

function ZX7card() {
  return (
    <div className="card">
      <div className="card__imgBox">
        <img src={ZX7cardIMG} alt="headphone" className="card__imgBox-img" />
      </div>
      <div className="card__title">ZX7 Speaker</div>
      <BtnSee
        className="content__btn-see"
        link="/headphones/ZX7card-speakers"
      />
    </div>
  );
}

export default ZX7card;
