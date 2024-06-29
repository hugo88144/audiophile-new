import { useData } from "../Context/DataContext"; // Import the useData hook
import BtnSee from "./BtnSee";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function XX99MARKII({ children }) {
  const { products, loading, error } = useData();
  const [bgImage, setBgImage] = useState("");

  if (loading) return null;
  if (error) return null;

  // Find the product data for XX99 Mark II Headphones
  const product = products.find(
    (product) => product.name === "XX99 Mark II Headphones"
  );

  if (!product) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth < 480) {
        setBgImage(product.categoryImage.mobile);
      } else if (window.innerWidth < 768) {
        setBgImage(product.categoryImage.tablet);
      } else {
        setBgImage(product.categoryImage.desktop);
      }
    };

    updateBgImage();
    window.addEventListener("resize", updateBgImage);

    return () => {
      window.removeEventListener("resize", updateBgImage);
    };
  }, [product.categoryImage]);

  return (
    <div className="XX99MARKIICard">
      <div className="XX99MARKIICard__imgBox">
        <div
          className="XX99MARKIICard__imgBox-img XX99IIImg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
      <div className="content2">
        <div className="content2__new">New product</div>
        <div className="content2__title">{product.name}</div>
        <p className="content2__description">{product.description}</p>
        {children ? (
          children
        ) : (
          <BtnSee
            className="content2__btn-see"
            link={`/headphones/${product.slug}`}
          />
        )}
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default XX99MARKII;
