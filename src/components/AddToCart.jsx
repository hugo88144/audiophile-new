import BtnCounter from "./BtnCounter";
// eslint-disable-next-line react/prop-types
function AddToCart({ price, onAddToCart, productName }) {
  const handleClick = () => {
    onAddToCart({ productName, price });
  };
  return (
    <>
      <div className="addToCart__price">${price}</div>
      <div className="addToCart">
        <div className="addToCart__btnBox">
          <BtnCounter />
          <button className="addToCart__btn" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
