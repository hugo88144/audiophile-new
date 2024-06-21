import { useCart } from "../Context/CartContext";

function CartSummery() {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toLocaleString(); // This will format the number with commas
  };

  const calculateVAT = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const vat = total * 0.2;
    return vat.toLocaleString();
  };

  const calculateGrandTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const vat = total * 0.2;
    const grandTotal = total + vat;
    return grandTotal.toLocaleString();
  };

  return (
    <div className="summary">
      <div className="summary__header">
        <div className="summary__header-title">SUMMARY</div>
      </div>

      {cartItems.length > 0 ? ( // Conditionally render cart content if there are items in the cart
        <div className="summary__content">
          {cartItems.map(
            (
              item,
              index // Map through cartItems to display each item in the cart
            ) => (
              <div className="summary__content-box" key={index}>
                <img
                  src={item.imageUrl}
                  className="summary__content-img"
                  alt={item.productName}
                />
                <div className="summary__content-info">
                  <div className="summary__content-title">
                    {item.productName}
                  </div>
                  <div className="summary__content-price">
                    ${item.price.toLocaleString()}
                  </div>
                </div>

                <div className="summary__content-quantity">
                  x{item.quantity}
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <p className="summary__empty"></p>
      )}
      <div className="summary__Total__box">
        <div className="summary__Total">
          <div className="summary__Total-title">TOTAL</div>
          <div className="summary__Total-price">${calculateTotal()}</div>
        </div>

        <div className="summary__Total">
          <div className="summary__Total-title">SHIPPING</div>
          <div className="summary__Total-price">$50</div>
        </div>

        <div className="summary__Total">
          <div className="summary__Total-title">VAT(INCLUDED)</div>
          <div className="summary__Total-price">${calculateVAT()}</div>
        </div>

        <div className="summary__Total">
          <div className="summary__Total-title">GRAND TOTAL</div>
          <div className="summary__Total-price summary__Total-price-grand">
            ${calculateGrandTotal()}
          </div>
        </div>
      </div>

      <button type="submit" className="summary__btn">
        CONTINUE & PAY
      </button>
    </div>
  );
}

export default CartSummery;
