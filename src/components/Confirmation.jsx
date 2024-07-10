import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import iconOrderConfirmation from "../assets/checkout/icon-order-confirmation.svg";
import { useState } from "react";

function Confirmation() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { cartItems } = useCart();

  const calculateGrandTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const vat = total * 0.2;
    const grandTotal = total + vat;
    return grandTotal.toLocaleString();
  };

  const grandTotal = calculateGrandTotal();

  return (
    <div className="overlayConfirmation">
      <div className="confirmation">
        <img src={iconOrderConfirmation} className="confirmation__icon" />
        <div className="confirmation__title">
          THANK YOU FOR <br /> YOUR ORDER
        </div>
        <div className="confirmation__description">
          You will receive an email confirmation shortly.
        </div>
        <div className="confirmation__box">
          <div className="confirmation__box-cart">
            <div
              className={`confirmation__box-cart-items ${
                isCollapsed ? "collapsed" : null
              }`}
            >
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.imageUrl}
                    alt={item.productName}
                    className="cart-item__image"
                  />
                  <div className="cart-item__details">
                    <div className="cart-item__name">{item.productName}</div>
                    <div className="cart-item__price">
                      ${item.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="cart-item__quantity">x{item.quantity}</div>
                </div>
              ))}
            </div>
            <button
              className="view-toggle"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? "View More" : "View Less "}
            </button>
          </div>
          <div className="confirmation__box-total">
            <div className="confirmation__box-total-title">GRAND TOTAL</div>
            <div className="confirmation__box-total-price">
              ${grandTotal.toLocaleString()}
            </div>
          </div>
        </div>
        <Link to="/" className="confirmation__link">
          <button className="confirmation__btn">BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
