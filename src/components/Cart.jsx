/* eslint-disable react/prop-types */
import { useCart } from "../Context/CartContext";
import BtnCounter from "./BtnCounter";
import itemONE from "../assets/cart/image-xx99-mark-two-headphones.jpg";

function Cart() {
  const { dispatch, cartItems } = useCart();

  const removeAllItems = () => {
    dispatch({ type: "REMOVE_ALL" });
  };

  const updateItemQuantity = (productName, quantity) => {
    dispatch({
      type: "SET_PRODUCT_QUANTITY",
      payload: { productName, newQuantity: quantity },
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__header-title">CART ({cartItems.length})</div>
        <button className="cart__header-btn" onClick={removeAllItems}>
          Remove all
        </button>
      </div>

      {cartItems.length > 0 ? (
        <div className="cart__content">
          {cartItems.map((item, index) => (
            <div className="cart__content-box" key={index}>
              <img src={itemONE} className="cart__content-img" alt="item one" />
              <div className="cart__content-info">
                <div className="cart__content-title">{item.productName}</div>
                <div className="cart__content-price">$ {item.price}</div>
              </div>
              <BtnCounter
                productName={item.productName}
                initialQuantity={item.quantity}
                onQuantityChange={(quantity) =>
                  updateItemQuantity(item.productName, quantity)
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="cart__empty">Your cart is empty.</p>
      )}

      <div className="cart__Total">
        <div className="cart__Total-title">TOTAL</div>
        <div className="cart__Total-price">$ {calculateTotal()}</div>
      </div>
      <button className="cart__btn">Checkout</button>
    </div>
  );
}

export default Cart;
