import NavBar from "../components/Nav.jsx";
import ProductCard from "../components/ProductCard.jsx";

import AudioProducts from "../components/AuidoProducts.jsx";
import AudioProductsV2 from "../components/AudioProductsV2.jsx";

import AddToCart from "../components/AddToCart.jsx";

import YX1 from "../components/YX1.jsx";
import GoBack from "../components/GoBack.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";
import Gallery from "../components/Gallery.jsx";

function YX1Page() {
  return (
    <div className="box">
      <NavBar />
      <GoBack />
      <YX1>
        <AddToCart price="599" productName={"YX1 Earphones"} />
      </YX1>
      <ProductFeatures index={0} />
      <Gallery index={0} />
      <AudioProductsV2 index={0} />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default YX1Page;
