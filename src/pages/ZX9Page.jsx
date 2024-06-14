import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";

import XX99MARKIcard from "../components/XX99MARKIcard.jsx";
import XX59card from "../components/XX59card.jsx";

import AddToCart from "../components/AddToCart.jsx";
import ZX7card from "../components/ZX7card.jsx";
import ZX9Imgs from "../components/ZX9Imgs.jsx";
import ZX9Features from "../components/ZX9Features.jsx";

import ZX9SPEAKER from "../components/ZX9SPEAKER.jsx";
function ZX9Page() {
  return (
    <div className="box">
      <NavBar />
      <ZX9SPEAKER>
        <AddToCart price="4,500" />
      </ZX9SPEAKER>
      <ZX9Features />
      <ZX9Imgs />
      <AudioProductsV2>
        <ZX7card />
        <XX99MARKIcard />
        <XX59card />
      </AudioProductsV2>
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default ZX9Page;
