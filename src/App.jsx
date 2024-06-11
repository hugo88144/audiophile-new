import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Headphone from "./pages/Headphone";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

import Footer from "./components/Footer";
import XX99II from "./pages/XX99II";
import XX99I from "./pages/XX99I";
import "./sass/main.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="headphones" element={<Headphone />} />
        <Route
          path="headphones/xx99-mark-two-headphones"
          element={<XX99II />}
        />
        <Route path="headphones/xx99-mark-one-headphones" element={<XX99I />} />
        {/* <Route
          path="headphones/xx99-mark-one-headphones"
          element={<ProductDetail />}
        />
        <Route path="headphones/xx59-headphones" element={<ProductDetail />} />
        <Route path="speakers/zx9-speaker" element={<ProductDetail />} />
        <Route path="speakers/zx7-speaker" element={<ProductDetail />} />
        <Route
          path="earphones/yx1-wireless-earphones"
          element={<ProductDetail />}
        /> */}

        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
