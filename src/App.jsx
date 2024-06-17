/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Headphone from "./pages/Headphone";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

import Footer from "./components/Footer";
import XX99II from "./pages/XX99II";
import XX99I from "./pages/XX99I";
import "./sass/main.scss";
import XX59Page from "./pages/XX59Page";
import ZX9Page from "./pages/ZX9Page";
import ZX7Page from "./pages/ZX7Page";
import YX1Page from "./pages/YX1Page";
import { CartProvider } from "./Context/CartContext";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Function to handle adding an item to the cart
  const addToCart = ({ productName, price }) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.productName === productName
      );
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { productName, price, quantity }];
      }
    });
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="headphones" element={<Headphone />} />
          <Route
            path="headphones/xx99-mark-two-headphones"
            element={<XX99II />}
          />
          <Route
            path="headphones/xx99-mark-one-headphones"
            element={<XX99I />}
          />
          <Route path="headphones/xx59-headphones" element={<XX59Page />} />
          <Route path="speakers/zx9-speaker" element={<ZX9Page />} />
          <Route path="speakers/zx7-speaker" element={<ZX7Page />} />
          <Route
            path="earphones/yx1-wireless-earphones"
            element={<YX1Page />}
          />

          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
