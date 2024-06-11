// import XX99MARKIIcard from "./XX99MARKIIcard.jsx";
import XX99MARKIcard from "./XX99MARKIcard.jsx";
import XX59card from "./XX59card.jsx";
import ZX9card from "./ZX9card.jsx";
// import ZX7card from "./ZX7card.jsx";

function AudioProductsV2() {
  return (
    <div className="audioProductsV2">
      <div className="audioProductsV2__title">YOU MAY ALSO LIKE</div>
      <XX99MARKIcard />
      {/* <XX99MARKIIcard /> */}

      <XX59card />
      <ZX9card />
      {/* <ZX7card /> */}
    </div>
  );
}

export default AudioProductsV2;
