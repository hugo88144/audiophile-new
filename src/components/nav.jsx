import logo from "../assets/shared/desktop/logo.svg";

import { Link } from "react-router-dom";
import Basket from "./Basket";
import { useData } from "../Context/DataContext";
// eslint-disable-next-line react/prop-types

function NavBar() {
  const { products, loading, error } = useData();

  if (loading) return null;
  if (error) return null;

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <nav className="nav">
      <img className="nav-link logo" src={logo} alt="Logo" />

      <Link to="/" className="nav-link">
        HOME
      </Link>
      {categories.map((category) => (
        <Link to={`/${category}`} key={category} className="nav-link">
          {category.toUpperCase()}
        </Link>
      ))}
      <Basket />
    </nav>
  );
}

export default NavBar;
