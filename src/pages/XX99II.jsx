/* eslint-disable react/prop-types */
import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";
import XX99IIImgs from "../components/XX99IIImgs";
import XX99MARKIcard from "../components/XX99MARKIcard.jsx";
import XX59card from "../components/XX59card.jsx";
import ZX9card from "../components/ZX9card.jsx";
import XX99IIFeatures from "../components/XX99IIFeatures.jsx";

import XX99MARKII from "../components/XX99MARKII";

import AddToCart from "../components/AddToCart.jsx";

import GoBack from "../components/GoBack.jsx";

function XX99II({}) {
  return (
    <div className="box">
      <NavBar />
      <GoBack />
      <XX99MARKII>
        <AddToCart />
      </XX99MARKII>
      <XX99IIFeatures />
      <XX99IIImgs />
      <AudioProductsV2>
        <XX99MARKIcard />
        <ZX9card />
        <XX59card />
      </AudioProductsV2>
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default XX99II;
