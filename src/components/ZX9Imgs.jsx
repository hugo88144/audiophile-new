import galImg1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import galImg2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import galImg3 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

function ZX9Imgs() {
  return (
    <div className="imgContainer">
      <div className="imgContainer__imgBox">
        <img src={galImg1} alt="xx99" className="imgContainer__imgBox-img" />
        <img src={galImg2} alt="xx99" className="imgContainer__imgBox-img" />
      </div>
      <div className="imgContainer__imgbigbox">
        <img src={galImg3} alt="xx99" className="imgContainer__imgBox-img" />
      </div>
    </div>
  );
}
export default ZX9Imgs;
