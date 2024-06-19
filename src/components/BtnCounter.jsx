/* eslint-disable react/prop-types */
import { useState } from "react";

// BtnCounter component to handle quantity increment and decrement
function BtnCounter({ initialQuantity, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initialQuantity); // Initialize quantity state with the initial quantity

  // Handle increment button click
  const handleIncrement = () => {
    const newQuantity = quantity + 1; // Increment quantity
    setQuantity(newQuantity); // Update quantity state
    onQuantityChange(newQuantity); // Notify parent component of quantity change
  };

  // Handle decrement button click
  const handleDecrement = () => {
    if (quantity > 1) {
      // Ensure quantity doesn't go below 1
      const newQuantity = quantity - 1; // Decrement quantity
      setQuantity(newQuantity); // Update quantity state
      onQuantityChange(newQuantity); // Notify parent component of quantity change
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
