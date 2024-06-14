import galImg1 from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import galImg2 from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import galImg3 from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

function XX59Imgs() {
  return (
    <div className="imgContainer">
      <div className="imgContainer__imgBox">
        <img src={galImg1} alt="xx59" className="imgContainer__imgBox-img" />
        <img src={galImg2} alt="xx59" className="imgContainer__imgBox-img" />
      </div>
      <div className="imgContainer__imgbigbox">
        <img src={galImg3} alt="xx59" className="imgContainer__imgBox-img" />
      </div>
    </div>
  );
}

export default XX59Imgs;
