import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";
import XX59Imgs from "../components/XX59Imgs";
import XX99MARKIIcard from "../components/XX99MARKIIcard";
import XX99MARKIcard from "../components/XX99MARKIcard";
import ZX9card from "../components/ZX9card";

import XX59 from "../components/XX59";

import AddToCart from "../components/AddToCart";
import GoBack from "../components/GoBack";
import ProductFeatures from "../components/ProductFeatures";

function XX59Page() {
  return (
    <div className="box">
      <NavBar />
      <GoBack />

      <XX59>
        <AddToCart price="899" productName={"XX59 Headphones"} />
      </XX59>

      <ProductFeatures index={2} />

      <XX59Imgs />
      <AudioProductsV2>
        <XX99MARKIIcard />
        <XX99MARKIcard />
        <ZX9card />
      </AudioProductsV2>
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default XX59Page;
