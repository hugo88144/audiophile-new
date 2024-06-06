import NavBar from "./components/Nav";
import HeaderContent from "./components/HeaderContent";
import SectionOne from "./pages/SectionOne";
import AudioPoducts from "./components/AuidoPoducts";
import SectionTwo from "./components/SectionTwo";
import "./sass/main.scss";

function App() {
  return (
    <div className="box">
      <SectionOne>
        <NavBar />
        <HeaderContent />
      </SectionOne>
      <AudioPoducts />
      <SectionTwo />
    </div>
  );
}

export default App;
