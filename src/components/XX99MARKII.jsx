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
          you to browse and experience a wide range of our XX99markIIs. Stop by
          our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default XX99markII;
