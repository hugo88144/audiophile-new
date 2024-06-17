/* eslint-disable react/prop-types */
import BtnCounter from "./BtnCounter";

function AddToCart({
  price,
  onAddToCart,
  productName,
  quantity,
  onSetQuantity,
}) {
  const handleClick = () => {
    onAddToCart({ productName, price: parseFloat(price.replace(",", "")) });
  };

  return (
    <>
      <div className="addToCart__price">${price}</div>
      <div className="addToCart">
        <div className="addToCart__btnBox">
          <BtnCounter quantity={quantity} onQuantityChange={onSetQuantity} />
          <button className="addToCart__btn" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
