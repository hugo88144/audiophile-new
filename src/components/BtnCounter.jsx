/* eslint-disable react/prop-types */
function BtnCounter({ quantity, onQuantityChange }) {
  function Handleincrement() {
    onQuantityChange(quantity + 1);
  }
  function Handledecrement() {
    onQuantityChange(quantity - 1);
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
