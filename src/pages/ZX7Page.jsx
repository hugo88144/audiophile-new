import NavBar from "../components/Nav.jsx";
import ProductCard from "../components/ProductCard.jsx";

import AudioProducts from "../components/AuidoProducts.jsx";
import AudioProductsV2 from "../components/AudioProductsV2.jsx";

import XX99MARKIcard from "../components/XX99MARKIcard.jsx";
import XX59card from "../components/XX59card.jsx";

import AddToCart from "../components/AddToCart.jsx";
import ZX7card from "../components/ZX7card.jsx";
import ZX7Imgs from "../components/ZX7Imgs.jsx";
import ZX7Features from "../components/ZX7Features.jsx";

import ZX7SPEAKER from "../components/ZX7SPEAKER.jsx";
import ZX9card from "../components/ZX9card.jsx";
function ZX7Page() {
  return (
    <div className="box">
      <NavBar />
      <ZX7SPEAKER>
        <AddToCart price="3,500" productName={"ZX7 Speaker"} />
      </ZX7SPEAKER>
      <ZX7Features />
      <ZX7Imgs />
      <AudioProductsV2>
        <ZX9card />
        <XX99MARKIcard />
        <XX59card />
      </AudioProductsV2>
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default ZX7Page;
