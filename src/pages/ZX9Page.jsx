import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";

import XX99MARKIcard from "../components/XX99MARKIcard.jsx";
import XX59card from "../components/XX59card.jsx";

import AddToCart from "../components/AddToCart.jsx";
import ZX7card from "../components/ZX7card.jsx";

import ZX9SPEAKER from "../components/ZX9SPEAKER.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";
import Gallery from "../components/Gallery.jsx";
function ZX9Page() {
  return (
    <div className="box">
      <NavBar />
      <ZX9SPEAKER>
        <AddToCart price="4,500" productName={"ZX9 Speaker"} />
      </ZX9SPEAKER>
      <ProductFeatures index={5} />
      <Gallery index={5} />
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
