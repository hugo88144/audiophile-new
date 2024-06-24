import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import iconOrderConfirmation from "../assets/checkout/icon-order-confirmation.svg";

function Confirmation() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This navigates back one page in the history stack
  };
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
            <div className="confirmation__box-cart-items">
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
            <button className="view-toggle">view less</button>
          </div>
          <div className="confirmation__box-total">
            <div className="confirmation__box-total-title">GRAND TOTAL</div>
            <div className="confirmation__box-total-price">
              ${grandTotal.toLocaleString()}
            </div>
          </div>
        </div>
        <button className="confirmation__btn" onClick={handleGoBack}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
