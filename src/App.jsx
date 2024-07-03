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
import CheckOutPage from "./pages/CheckOutPage";
import { DataProvider } from "./Context/DataContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <DataProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
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
            <Route path="speaker/zx9-speaker" element={<ZX9Page />} />
            <Route path="speaker/zx7-speaker" element={<ZX7Page />} />
            <Route path="earphones/yx1-earphones" element={<YX1Page />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphones />} />
            <Route path="checkout" element={<CheckOutPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
