import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";

import XX59 from "../components/XX59";

import AddToCart from "../components/AddToCart";
import GoBack from "../components/GoBack";
import ProductFeatures from "../components/ProductFeatures";
import Gallery from "../components/Gallery";

function XX59Page() {
  return (
    <div className="box">
      <Nav />
      <GoBack />

      <XX59>
        <AddToCart price="899" productName={"XX59 Headphones"} />
      </XX59>

      <ProductFeatures index={1} />

      <Gallery index={1} />

      <AudioProductsV2 index={1} />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default XX59Page;
