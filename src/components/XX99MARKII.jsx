import BtnSee from "./BtnSee";
// eslint-disable-next-line react/prop-types
function XX99MARKII({ children }) {
  return (
    <div className="XX99MARKIICard">
      <div className="XX99MARKIICard__imgBox">
        <div className="XX99MARKIICard__imgBox-img XX99IIImg"></div>
      </div>
      <div className="content2">
        <div className="content2__new">New product </div>
        <div className="content2__title">XX99 Mark II Headphones </div>
        <p className="content2__description">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        {children ? (
          children
        ) : (
          <BtnSee
            className="content2__btn-see"
            link="/headphones/xx99-mark-two-headphones"
          />
        )}
        {/* <BtnSee
          className="content2__btn-see"
          link="/headphones/xx99-mark-two-headphones"
        /> */}
      </div>
    </div>
  );
}

export default XX99MARKII;
