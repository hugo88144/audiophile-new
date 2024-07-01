// import XX99MARKIIcard from "./XX99MARKIIcard.jsx";

import { useData } from "../Context/DataContext";
import BtnSee from "./BtnSee";

// import ZX7card from "./ZX7card.jsx";

// eslint-disable-next-line react/prop-types
function AudioProductsV2({ index = 0 }) {
  const { products, loading, error } = useData();
  if (loading) return null;
  if (error) return null;
  if (!products || !products.length) return null;

  const data = products[index];
  if (!data) return null;

  const { others } = data;
  const { 0: first, 1: second, 2: third } = others;
  const { name, slug, image } = first;
  const { mobile, tablet, desktop } = image;

  const { name2, slug2, image2 } = second;

  const { name3, slug3, image3 } = third;

  console.log(name, slug, image);

  return (
    <div className="card">
      <div className="card__imgBox">
        <img
          src={desktop}
          srcSet={`/src${mobile.replace(".", "")} 480w, /src${tablet.replace(
            ".",
            ""
          )} 768w, /src${desktop.replace(".", "")} 1200w`}
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
