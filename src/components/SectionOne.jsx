import Nav from "./Nav";
import HeaderContent from "./HeaderContent";

function SectionOne() {
  return (
    <div className="container">
      <Nav />

      <HeaderContent productIndex={3} />
    </div>
  );
}

export default SectionOne;
