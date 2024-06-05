import NavBar from "./components/Nav";
import HeaderContent from "./components/HeaderContent";
import SectionOne from "./pages/SectionOne";
import AudioPoducts from "./components/AuidoPoducts";
import "./sass/main.scss";

function App() {
  return (
    <div className="box">
      <SectionOne>
        <NavBar />
        <HeaderContent />
      </SectionOne>
      <AudioPoducts />
    </div>
  );
}

export default App;
