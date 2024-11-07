import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";

import AddToCart from "../components/AddToCart.jsx";

import ZX9SPEAKER from "../components/ZX9SPEAKER.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";
import Gallery from "../components/Gallery.jsx";
import GoBack from "../components/GoBack.jsx";
function ZX9Page() {
  return (
    <div className="box">
      <Nav />
      <GoBack />
      <ZX9SPEAKER>
        <AddToCart price="4,500" productName={"ZX9 Speaker"} />
      </ZX9SPEAKER>
      <ProductFeatures index={5} />
      <Gallery index={5} />
      <AudioProductsV2 index={5} />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default ZX9Page;
