import productCardImg from "../assets/shared/desktop/image-best-gear.jpg";

function ProductCard() {
  return (
    <div className="productCard">
      <div className="productCard__text">
        <div className="productCard__text-title">
          Bringing you the <span>best</span> audio gear
        </div>
        <p className="productCard__text-description">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="productCard__imgBox">
        <img src={productCardImg} className="productCard__imgBox-img" />
      </div>
    </div>
  );
}

export default ProductCard;
