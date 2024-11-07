import Nav from "../components/Nav.jsx";
import ProductCard from "../components/ProductCard.jsx";

import AudioProducts from "../components/AuidoProducts.jsx";
import AudioProductsV2 from "../components/AudioProductsV2.jsx";

import AddToCart from "../components/AddToCart.jsx";

import ZX7SPEAKER from "../components/ZX7SPEAKER.jsx";

import ProductFeatures from "../components/ProductFeatures.jsx";
import Gallery from "../components/Gallery.jsx";
import GoBack from "../components/GoBack.jsx";
function ZX7Page() {
  return (
    <div className="box">
      <Nav />
      <GoBack />
      <ZX7SPEAKER>
        <AddToCart price="3,500" productName={"ZX7 Speaker"} />
      </ZX7SPEAKER>
      <ProductFeatures index={4} />
      <Gallery index={4} />
      <AudioProductsV2 index={4} />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default ZX7Page;
