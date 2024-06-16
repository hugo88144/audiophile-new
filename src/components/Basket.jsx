import cart from "../assets/shared/desktop/icon-cart.svg";

function handleBasket() {
  console.log("click");
}
function Basket() {
  return (
    <img
      className="nav-link"
      src={cart}
      alt="Logo"
      onClick={{
        handleBasket,
      }}
    />
  );
}

export default Basket;
