// import XX99MARKIIcard from "./XX99MARKIIcard.jsx";

import { useData } from "../Context/DataContext";
import BtnSee from "./BtnSee";

// import ZX7card from "./ZX7card.jsx";

// eslint-disable-next-line react/prop-types
function AudioProductsV2({ index = 0 }) {
  const { products, loading, error } = useData();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;
  if (!products || !products.length) return <p>No products available.</p>;

  const data = products[index];
  if (!data) return <p>No data available for this product.</p>;

  const { image, name, slug } = data;
  const { mobile, tablet, desktop } = image;

  return (
    <div className="card">
      <div className="card__imgBox">
        <img
          src={mobile}
          srcSet={`${mobile} 480w, ${tablet} 768w, ${desktop} 1200w`}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt={name}
          className="card__imgBox-img"
        />
      </div>
      <div className="card__title">{name}</div>
      <BtnSee className="content__btn-see" link={`/speakers/${slug}`} />
    </div>
  );
}

export default AudioProductsV2;
