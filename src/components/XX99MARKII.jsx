import XX99markIICardImg from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
function XX99markII() {
  return (
    <div className="XX99markIICard">
      <div className="XX99markIICard__imgBox">
        <img src={XX99markIICardImg} className="XX99markIICard__imgBox-img" />
      </div>
      <div className="XX99markIICard__text">
        <div className="XX99markIICard__text-title">
          Bringing you the <span>best</span> audio gear
        </div>
        <p className="XX99markIICard__text-description">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
        </p>
      </div>
    </div>
  );
}

export default XX99markII;
