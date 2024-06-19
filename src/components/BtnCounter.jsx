/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCart } from "../Context/CartContext";

function BtnCounter({ productName, initialQuantity }) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch({
      type: "SET_PRODUCT_QUANTITY",
      payload: { productName, newQuantity },
    });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch({
        type: "SET_PRODUCT_QUANTITY",
        payload: { productName, newQuantity },
      });
    }
  };

  return (
    <div className="btnCounter">
      <button className="btnCounter__minus" onClick={handleDecrement}>
        -
      </button>
      <span className="btnCounter__quantity">{quantity}</span>
      <button className="btnCounter__plus" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default BtnCounter;
