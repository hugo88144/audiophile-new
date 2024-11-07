import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

import AudioProducts from "../components/AuidoProducts";
import ZX9SPEAKER from "../components/ZX9SPEAKER";
import ZX7SPEAKER from "../components/ZX7SPEAKER";
import Nav from "../components/Nav";

function Speakers() {
  return (
    <div className="box">
      <Nav />
      <Header text="SPEAKERS" />
      <ZX9SPEAKER />
      <ZX7SPEAKER />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default Speakers;
