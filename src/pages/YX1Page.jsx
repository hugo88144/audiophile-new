import NavBar from "../components/Nav.jsx";
import ProductCard from "../components/ProductCard.jsx";

import AudioProducts from "../components/AuidoProducts.jsx";
import AudioProductsV2 from "../components/AudioProductsV2.jsx";

import XX99MARKIcard from "../components/XX99MARKIcard.jsx";
import XX59card from "../components/XX59card.jsx";

import AddToCart from "../components/AddToCart.jsx";

import ZX9card from "../components/ZX9card.jsx";
import YX1Imgs from "../components/YX1Imgs.jsx";
import YX1Features from "../components/YX1Features.jsx";
import YX1 from "../components/YX1.jsx";
import GoBack from "../components/GoBack.jsx";

function YX1Page() {
  return (
    <div className="box">
      <NavBar />
      <GoBack />
      <YX1>
        <AddToCart price="599" productName={"YX1 Earphones"} />
      </YX1>
      <YX1Features />
      <YX1Imgs />
      <AudioProductsV2>
        <XX99MARKIcard />
        <XX59card />
        <ZX9card />
      </AudioProductsV2>
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default YX1Page;
