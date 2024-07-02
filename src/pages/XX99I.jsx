import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";

import AddToCart from "../components/AddToCart";

import XX99MARKI from "../components/XX99MARKI";
import GoBack from "../components/GoBack";
import ProductFeatures from "../components/ProductFeatures";
import Gallery from "../components/Gallery";

function XX99I() {
  return (
    <div className="box">
      <NavBar />
      <GoBack />
      <XX99MARKI>
        <AddToCart price="1,750" productName={"XX99 Mark I"} />
      </XX99MARKI>
      <ProductFeatures index={2} />

      <Gallery index={2} />
      <AudioProductsV2 index={2} />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default XX99I;
