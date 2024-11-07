import HamBurgerImg from "/assets/shared/tablet/icon-hamburger.svg";

// eslint-disable-next-line react/prop-types
function HamBurger({ isActive, setIsActive }) {
  function handleClick() {
    setIsActive(!isActive);
    console.log(isActive);
  }
  return (
    <button className="hamBurger" onClick={handleClick}>
      <img src={HamBurgerImg} alt="Hamburger Icon" />
    </button>
  );
}

export default HamBurger;
