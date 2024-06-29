/* eslint-disable react/prop-types */
function Header({ text }) {
  // i thought about doing useData here for the header but its unnecessary
  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
