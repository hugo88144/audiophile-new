/* eslint-disable react/prop-types */
import { useState } from "react"; // Import the useState hook to manage component state
import { useCart } from "../Context/CartContext"; // Import useCart hook to access the cart context
import BtnCounter from "./BtnCounter"; // Import BtnCounter component for managing quantity changes

// Importing product images
import XX99II from "../assets/cart/image-xx99-mark-two-headphones.jpg";
import XX99I from "../assets/cart/image-xx99-mark-one-headphones.jpg";
import XX59 from "../assets/cart/image-xx59-headphones.jpg";
import ZX9 from "../assets/cart/image-zx9-speaker.jpg";
import ZX7 from "../assets/cart/image-zx7-speaker.jpg";
import YX1 from "../assets/cart/image-yx1-earphones.jpg";

// Mapping product names to their corresponding image URLs
const imageMap = {
  "XX99 Mark II": XX99II,
  "XX99 Mark I": XX99I,
  "XX59 Headphones": XX59,
  "ZX9 Speaker": ZX9,
  "ZX7 Speaker": ZX7,
  "YX1 Earphones": YX1,
};

function AddToCart({ price, productName }) {
  const { dispatch, cartItems } = useCart(); // Access dispatch function and cart items from the cart context
  const [quantity, setQuantity] = useState(1); // Initialize quantity state to 1

  // Find the item in the cart that matches the current product name
  const item = cartItems.find((item) => item.productName === productName);
  const initialQuantity = item ? item.quantity : 1; // Set initial quantity based on existing cart item or default to 1

  // Handle changes in quantity from BtnCounter
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity); // Update the quantity state
  };

  // Handle click on the "Add to cart" button
  const handleClick = () => {
    const imageUrl = imageMap[productName]; // Get the image URL for the product
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productName,
        price: Number(price.replace(/,/g, "")), // Remove commas and convert price to number
        quantity,
        imageUrl,
      },
    });
  };

  return (
    <>
      <div className="addToCart__price">${price}</div>{" "}
      {/* Display the product price */}
      <div className="addToCart">
        <div className="addToCart__btnBox">
          <BtnCounter
            productName={productName}
            initialQuantity={initialQuantity} // Pass initial quantity to BtnCounter
            onQuantityChange={handleQuantityChange} // Pass quantity change handler to BtnCounter
          />
          <button className="addToCart__btn" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
