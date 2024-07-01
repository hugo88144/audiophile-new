/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";

import XX99MARKII from "../components/XX99MARKII";

import AddToCart from "../components/AddToCart.jsx";

import GoBack from "../components/GoBack.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";
import Gallery from "../components/Gallery.jsx";

function XX99II() {
  return (
    <div className="box">
      <NavBar />

      <GoBack />
      <XX99MARKII>
        <AddToCart price="2,999" productName={"XX99 Mark II"} />
      </XX99MARKII>
      {/* <ProductFeatures index={3} /> */}
      <Gallery index={3} />
      <AudioProductsV2 index={3} />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default XX99II;
