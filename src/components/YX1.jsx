/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useData } from "../Context/DataContext"; // Import the useData hook
import BtnSee from "../components/BtnSee"; // Import BtnSee with correct relative path

function YX1({ children }) {
  const { products, loading, error } = useData();
  const [imageUrl, setImageUrl] = useState("");

  // Find the product data for YX1 Wireless Earphones
  const product = products?.find(
    (product) => product.name === "YX1 Wireless Earphones"
  );

  useEffect(() => {
    const updateImageUrl = () => {
      if (!product) return;

      let newImageUrl = product.categoryImage.desktop;
      if (window.innerWidth < 768) {
        newImageUrl = product.categoryImage.tablet;
      }
      if (window.innerWidth < 400) {
        newImageUrl = product.categoryImage.mobile;
      }

      setImageUrl(newImageUrl);
    };

    // Initial call to set the image URL
    updateImageUrl();

    // Add event listener for window resize
    window.addEventListener("resize", updateImageUrl);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateImageUrl);
  }, [product]);

  if (loading) return null;
  if (error) return null;
  if (!product) return null;

  return (
    <div className="XX99MARKIICard">
      <div className="XX99MARKIICard__imgBox">
        <div
          className="XX99MARKIICard__imgBox-img"
          style={{ backgroundImage: `url(/src${imageUrl.replace(".", "")})` }}
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
            link={`/earphones/${product.slug}`}
          />
        )}
      </div>
    </div>
  );
}

export default YX1;
