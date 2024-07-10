/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useData } from "../Context/DataContext";

function Gallery({ index = 0 }) {
  const { products, loading, error } = useData();
  const [imageUrls, setImageUrls] = useState({});

  const updateImageUrls = (gallery) => {
    const getResponsiveImageUrl = (image) => {
      if (window.innerWidth < 400) return image.mobile;
      if (window.innerWidth < 768) return image.tablet;
      return image.desktop;
    };

    const newImageUrls = {
      first: getResponsiveImageUrl(gallery.first),
      second: getResponsiveImageUrl(gallery.second),
      third: getResponsiveImageUrl(gallery.third),
    };

    setImageUrls(newImageUrls);
  };

  useEffect(() => {
    if (products && products[index]) {
      const { gallery } = products[index];
      if (gallery && gallery.first && gallery.second && gallery.third) {
        updateImageUrls(gallery);
        const handleResize = () => updateImageUrls(gallery);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }
  }, [products, index]);

  if (loading) return null;
  if (error) return null;
  if (!products || !products.length) return null;

  const data = products[index];
  if (!data) return <p>No data available for this product.</p>;

  const { gallery } = data;
  if (!gallery || !gallery.first || !gallery.second || !gallery.third) {
    console.error(
      "Gallery data is missing or not in the expected format:",
      gallery
    );
    return null;
  }

  return (
    <div className="imgContainer">
      <div className="imgContainer__imgBox">
        {/* Responsive image for the first image */}
        <div
          className="imgContainer__imgBox-img"
          style={{
            backgroundImage: `url(/src${imageUrls.first?.replace(".", "")})`,
          }}
        ></div>
        {/* Responsive image for the second image */}
        <div
          className="imgContainer__imgBox-img"
          style={{
            backgroundImage: `url(/src${imageUrls.second?.replace(".", "")})`,
          }}
        ></div>
      </div>
      <div className="imgContainer__imgBigBox">
        {/* Responsive image for the third image */}
        <div
          className="imgContainer__imgBigBox-img"
          style={{
            backgroundImage: `url(/src${imageUrls.third?.replace(".", "")})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Gallery;
