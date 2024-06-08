import NavBar from "../components/Nav";
import HeaderContent from "../components/HeaderContent";
import SectionOne from "../components/SectionOne";
import AudioPoducts from "../components/AuidoPoducts";
import SectionTwo from "../components/SectionTwo";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import "../sass/main.scss";

function Homepage() {
  return (
    <div className="box">
      <SectionOne>
        <NavBar />
        <HeaderContent />
      </SectionOne>
      <AudioPoducts />
      <SectionTwo />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default Homepage;
