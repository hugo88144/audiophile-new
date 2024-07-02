/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useData } from "../Context/DataContext";
import BtnSee from "./BtnSee";

function AudioProductsV2({ index = 0 }) {
  const { products, loading, error } = useData();
  const [imageUrls, setImageUrls] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateImageUrls = () => {
    if (!products || products.length === 0) return;

    const data = products[index];
    if (!data || !data.others) return;

    const newImageUrls = data.others.map((product) => {
      const { image } = product;
      if (windowWidth < 400) return `/src${image.mobile.replace(".", "")}`;
      if (windowWidth < 768) return `/src${image.tablet.replace(".", "")}`;
      return `/src${image.desktop.replace(".", "")}`;
    });

    setImageUrls(newImageUrls);
  };

  useEffect(() => {
    updateImageUrls();
  }, [products, index]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateImageUrls();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  if (loading || error || !products || !products.length) return null;

  const data = products[index];
  if (!data || !data.others) return null;
  console.log(data);

  return (
    <div className="audioProductsV2">
      <div className="audioProductsV2__title">YOU MAY ALSO LIKE</div>
      <div className="audioProductsV2__cards">
        {data.others.map((product, idx) => (
          <div key={idx} className="card">
            <div className="card__imgBox">
              <img
                src={imageUrls[idx] || ""}
                alt={product.name}
                className="card__imgBox-img"
              />
            </div>
            <div className="card__title">{product.name}</div>
            <BtnSee
              className="content__btn-see"
              link={`/${product.slug.split("-").splice(-1).join("")}/${
                product.slug
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AudioProductsV2;
