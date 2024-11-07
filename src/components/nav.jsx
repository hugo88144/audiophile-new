import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import Basket from "./Basket";
import { useData } from "../Context/DataContext";
import HamBurger from "./HamBurger";
import { useState } from "react";
import AudioProductsV3 from "./AudioProductsV3";
//
function Nav() {
  const { products, loading, error } = useData();
  const [isActive, setIsActive] = useState(false);

  if (loading) return null;
  if (error) return null;

  // Get unique categories from the products array
  const categories = [...new Set(products.map((product) => product.category))];

  // Define the desired order of categories
  const desiredOrder = ["headphones", "speakers", "earphones"];

  // Sort the categories based on the desired order
  const sortedCategories = categories.sort((a, b) => {
    return desiredOrder.indexOf(a) - desiredOrder.indexOf(b);
  });

  return (
    <>
      <nav className="nav">
        <HamBurger isActive={isActive} setIsActive={setIsActive} />
        <Link to="/" className="nav-link ">
          <img className="nav-link logo " src={logo} alt="Logo" />
        </Link>

        <Link to="/" className="nav-link gone">
          HOME
        </Link>

        {sortedCategories.map((category) => (
          <Link to={`/${category}`} key={category} className="nav-link gone">
            {category.toUpperCase()}
          </Link>
        ))}
        <Basket />
      </nav>

      {isActive && <AudioProductsV3 />}
    </>
  );
}

export default Nav;
