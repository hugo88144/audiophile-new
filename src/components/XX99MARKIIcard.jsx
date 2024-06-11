import XX99IIIMG from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import BtnSee from "./BtnSee";

function XX99MARKIIcard() {
  return (
    <div className="card">
      <div className="card__imgBox">
        <img src={XX99IIIMG} alt="headphone" className="card__imgBox-img" />
      </div>
      <div className="card__title">XX99 MARK II</div>
      <BtnSee
        className="content__btn-see"
        link="/headphones/xx99-mark-two-headphones"
      />
    </div>
  );
}

export default XX99MARKIIcard;
