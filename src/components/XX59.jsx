import XX59Img from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import BtnSee from "./BtnSee";
function XX59({ children }) {
  return (
    <div className="XX59">
      <div className="XX59__imgBox">
        <img src={XX59Img} className="XX59__imgBox-img" />
      </div>
      <div className="content2">
        <div className="content2__title">
          XX59 <br /> Headphones
        </div>
        <p className="content2__description">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>

        {children ? (
          children
        ) : (
          <BtnSee
            className="content2__btn-see"
            link="/headphones/xx99-mark-two-headphones"
          />
        )}
      </div>
    </div>
  );
}

export default XX59;
