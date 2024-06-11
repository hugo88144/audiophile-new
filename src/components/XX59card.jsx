import XX59IMG from "../assets/shared/desktop/image-xx59-headphones.jpg";
import BtnSee from "./BtnSee";

function XX59card() {
  return (
    <div className="card">
      <div className="card__imgBox">
        <img src={XX59IMG} alt="headphone" className="card__imgBox-img" />
      </div>
      <div className="card__title">XX59</div>
      <BtnSee className="content__btn-see" link="/headphones/xx59-headphones" />
    </div>
  );
}

export default XX59card;
