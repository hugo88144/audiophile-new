import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import XX99MARKII from "../components/XX99MARKII";

function Headphone() {
  return (
    <div className="box">
      <NavBar />
      <Header text="HEADPHONES" />
      <XX99MARKII />
      <ProductCard />
    </div>
  );
}

export default Headphone;
