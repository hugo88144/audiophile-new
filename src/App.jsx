import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Headphone from "./pages/Headphone";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import SectionOne from "./components/SectionOne";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <SectionOne />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="headphone" element={<Headphone />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
