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
function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = ({ productName, price }) => {
    const newItem = { productName, price };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="headphones" element={<Headphone />} />
        <Route
          path="headphones/xx99-mark-two-headphones"
          element={
            <XX99II
              onAddToCart={addToCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="headphones/xx99-mark-one-headphones" element={<XX99I />} />
        <Route path="headphones/xx59-headphones" element={<XX59Page />} />
        <Route path="speakers/zx9-speaker" element={<ZX9Page />} />
        <Route path="speakers/zx7-speaker" element={<ZX7Page />} />
        <Route path="earphones/yx1-wireless-earphones" element={<YX1Page />} />

        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
