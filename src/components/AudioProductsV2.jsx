import { useEffect, useState } from "react";
import { useData } from "../Context/DataContext";
import BtnSee from "./BtnSee";

function AudioProductsV2({ index = 0 }) {
  const { products, loading, error } = useData();
  const [imageUrls, setImageUrls] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateImageUrls = () => {
      if (products && products.length > 0) {
        const data = products[index];
        if (data && data.others) {
          const newImageUrls = data.others.map((product) => {
            const { image } = product;
            let newImageUrl = image.desktop; // Default to desktop image

            // Determine the image URL based on the window width
            if (windowWidth < 400) {
              newImageUrl = image.mobile;
            } else if (windowWidth < 768) {
              newImageUrl = image.tablet;
            }

            // Construct the full image URL and return it
            return `/src${newImageUrl.replace(".", "")}`;
          });

          // Log the updated image URLs for debugging
          console.log("Window width:", windowWidth);
          console.log("Updated image URLs:", newImageUrls);

          // Update the imageUrls state
          setImageUrls(newImageUrls);
        }
      }
    };

    // Call on mount to set initial image URLs
    updateImageUrls();

    // Add event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products, index, windowWidth]);

  useEffect(() => {
    // Trigger update of image URLs when windowWidth changes
    if (products && products.length > 0) {
      const data = products[index];
      if (data && data.others) {
        const newImageUrls = data.others.map((product) => {
          const { image } = product;
          let newImageUrl = image.desktop; // Default to desktop image

          // Determine the image URL based on the window width
          if (windowWidth < 400) {
            newImageUrl = image.mobile;
          } else if (windowWidth < 769) {
            newImageUrl = image.tablet;
          }

          // Construct the full image URL and return it
          return `/src${newImageUrl.replace(".", "")}`;
        });

        // Log the updated image URLs for debugging
        console.log("Window width:", windowWidth);
        console.log("Updated image URLs:", newImageUrls);

        // Update the imageUrls state
        setImageUrls(newImageUrls);
      }
    }
  }, [windowWidth, products, index]);

  if (loading) return null;
  if (error) return null;
  if (!products || !products.length) return null;

  const data = products[index];
  if (!data) return null;

  const { others } = data;

  return (
    <div className="audioProductsV2">
      <div className="audioProductsV2__title">YOU MAY ALSO LIKE</div>
      <div className="audioProductsV2__cards">
        {others.map((product, idx) => {
          const { name, slug } = product;
          const newImageUrl = imageUrls[idx] || "";

          return (
            <div key={idx} className="card">
              <div className="card__imgBox">
                <img
                  src={newImageUrl}
                  alt={name}
                  className="card__imgBox-img"
                />
              </div>
              <div className="card__title">{name}</div>
              <BtnSee className="content__btn-see" link={`/speakers/${slug}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AudioProductsV2;
