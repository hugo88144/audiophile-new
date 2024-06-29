import { useData } from "../Context/DataContext";
import BtnSee from "./BtnSee";

function HeaderContent({ productIndex = 3 }) {
  const { products, loading, error } = useData();

  if (loading) return null;
  if (error) return null;

  const product = products ? products[productIndex] : null;

  const { name, category, slug } = product;

  const linkName = slug;

  const description =
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.";
  console.log(products);
  return (
    <div className="content">
      <div className="content__new">New product </div>
      <div className="content__title">{name} </div>
      <p className="content__description">{description}</p>

      <BtnSee className="content__btn-see" link={`/${category}/${linkName}`} />
    </div>
  );
}

export default HeaderContent;
