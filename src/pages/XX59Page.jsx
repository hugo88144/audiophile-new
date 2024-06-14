import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";
import XX59Imgs from "../components/XX59Imgs";
import XX99MARKIIcard from "../components/XX99MARKIIcard";
import XX99MARKIcard from "../components/XX99MARKIcard";
import ZX9card from "../components/ZX9card";
import XX59Features from "../components/XX59Features";

function XX59Page() {
  return (
    <div className="box">
      <NavBar />

      <XX59Features />

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
