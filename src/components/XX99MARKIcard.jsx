import XX99IIMG from "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import BtnSee from "./BtnSee";

function XX99MARKIcard() {
  return (
    <div className="card">
      <div className="card__imgBox">
        <img src={XX99IIMG} alt="headphone" className="card__imgBox-img" />
      </div>
      <div className="card__title">XX99 MARK I</div>
      <BtnSee
        className="content__btn-see"
        link="/headphones/xx99-mark-one-headphones"
      />
    </div>
  );
}

export default XX99MARKIcard;
