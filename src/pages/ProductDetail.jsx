import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoPoducts";

function ProductDetail() {
  return (
    <div className="box">
      <NavBar />

      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default ProductDetail;
