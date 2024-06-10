import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BtnSee({ className, link }) {
  return (
    <Link to={link}>
      <button className={className}> See product </button>
    </Link>
  );
}

export default BtnSee;
