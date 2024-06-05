import "./sass/main.scss";

import NavBar from "./components/Nav";
import HeaderContent from "./components/HeaderContent";

function App() {
  return (
    <div className="container">
      <NavBar />
      <HeaderContent />
    </div>
  );
}

export default App;
