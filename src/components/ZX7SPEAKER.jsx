import { useState, useEffect } from "react";
import { useData } from "../Context/DataContext"; // Import the useData hook
import BtnSee from "../components/BtnSee"; // Import BtnSee with correct relative path

// eslint-disable-next-line react/prop-types
function ZX7SPEAKER({ children }) {
  const { products, loading, error } = useData();
  const [imageUrl, setImageUrl] = useState("");
  const [isColumnReverse, setIsColumnReverse] = useState(false);

  // Find the product data for ZX7 Speaker
  const product = products?.find((product) => product.name === "ZX7 Speaker");

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

    const updateFlexDirection = () => {
      setIsColumnReverse(window.innerWidth < 768);
    };

    // Initial call to set the image URL and flex direction
    updateImageUrl();
    updateFlexDirection();

    // Add event listeners for window resize
    window.addEventListener("resize", updateImageUrl);
    window.addEventListener("resize", updateFlexDirection);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("resize", updateImageUrl);
      window.removeEventListener("resize", updateFlexDirection);
    };
  }, [product]);

  if (loading) return null;
  if (error) return null;
  if (!product) return null;

  return (
    <div
      className="XX99MARKIICard"
      style={{
        flexDirection: isColumnReverse ? "column-reverse" : "row",
        display: "flex",
      }}
    >
      <div className="content2">
        <div className="content2__title">{product.name}</div>
        <p className="content2__description">{product.description}</p>
        {children ? (
          children
        ) : (
          <BtnSee
            className="content2__btn-see"
            link={`/speaker/${product.slug}`}
          />
        )}
      </div>
      <div className="XX99MARKIICard__imgBox">
        <div
          className="XX99MARKIICard__imgBox-img XX99IImg"
          style={{ backgroundImage: `url(${imageUrl.replace(".", "")})` }}
        ></div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default ZX7SPEAKER;
