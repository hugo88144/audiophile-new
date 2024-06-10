import XX99MARKICardImg from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";
function XX99MARKI() {
  return (
    <div className="XX99MARKICard">
      <div className="content2">
        <div className="content2__title">XX99 Mark I Headphones </div>
        <p className="content2__description">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>

        <BtnSee
          className="content2__btn-see"
          link="/headphones/xx99-mark-one-headphones"
        />
      </div>
      <div className="XX99MARKICard__imgBox">
        <img src={XX99MARKICardImg} className="XX99MARKICard__imgBox-img" />
      </div>
    </div>
  );
}

export default XX99MARKI;
