import AudioPoducts from "../components/AuidoProducts";
import SectionTwo from "../components/SectionTwo";
import ProductCard from "../components/ProductCard";
import SectionOne from "../components/SectionOne";
import "../sass/main.scss";

function Homepage() {
  return (
    <>
      <SectionOne />
      <AudioPoducts />
      <SectionTwo />
      <ProductCard />
    </>
  );
}

export default Homepage;
