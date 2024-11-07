import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

import AudioProducts from "../components/AuidoProducts";
import YX1 from "../components/YX1";

function Earphones() {
  return (
    <div className="box">
      <Nav />
      <Header text="Earphones" />
      <YX1 />
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default Earphones;
