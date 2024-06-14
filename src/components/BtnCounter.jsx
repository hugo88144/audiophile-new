import { useState } from "react";

function BtnCounter() {
  const [quantity, setQuantity] = useState(0);
  function Handleincrement() {
    setQuantity(quantity + 1);
  }
  function Handledecrement() {
    setQuantity(quantity - 1);
  }

  return (
    <div className="btnCounter">
      <button className="btnCounter__minus" onClick={Handledecrement}>
        -
      </button>
      <span className="btnCounter__quantity">{quantity}</span>
      <button className="btnCounter__plus" onClick={Handleincrement}>
        +
      </button>
    </div>
  );
}

export default BtnCounter;
