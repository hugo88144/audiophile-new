import XX59CartIMG from "../../assets/cart/image-xx59-headphones.jpg";
import XX99IICartIMG from "../../assets/cart/image-xx99-mark-two-headphones.jpg";
import BtnCounter from "../BtnCounter";

// Component for XX59 headphones
export function CartXX59() {
  return (
    <div className="cart__content">
      <div className="cart__content-box">
        <img
          src={XX59CartIMG}
          className="cart__content-img"
          alt="XX59 Headphones"
        />
        <div className="cart__content-info">
          <div className="cart__content-title">XX59</div>
          <div className="cart__content-price">$ 1,299</div>
        </div>
        <BtnCounter />
      </div>
    </div>
  );
}

// Component for XX99 MKII headphones
export function CartXX99II() {
  return (
    <div className="cart__content">
      <div className="cart__content-box">
        <img
          src={XX99IICartIMG}
          className="cart__content-img"
          alt="XX99 MKII Headphones"
        />
        <div className="cart__content-info">
          <div className="cart__content-title">XX99 MKII</div>
          <div className="cart__content-price">$ 1,299</div>
        </div>
        <BtnCounter />
      </div>
    </div>
  );
}
