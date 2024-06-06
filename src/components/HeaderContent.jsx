import BtnSee from "./BtnSee";

function HeaderContent() {
  return (
    <div className="content">
      <div className="content__new">New product </div>
      <div className="content__title">XX99 Mark II Headphones </div>
      <p className="content__description">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>

      <BtnSee />
    </div>
  );
}

export default HeaderContent;
