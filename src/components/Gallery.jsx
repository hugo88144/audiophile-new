/* eslint-disable react/prop-types */
import { useData } from "../Context/DataContext";

function Gallery({ index = 0 }) {
  const { products, loading, error } = useData();

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

  // Destructuring gallery data for each image
  const { first, second, third } = gallery;

  // Destructuring image URLs for different devices
  const {
    mobile: firstMobile,
    tablet: firstTablet,
    desktop: firstDesktop,
  } = first;
  const {
    mobile: secondMobile,
    tablet: secondTablet,
    desktop: secondDesktop,
  } = second;
  const {
    mobile: thirdMobile,
    tablet: thirdTablet,
    desktop: thirdDesktop,
  } = third;

  return (
    <div className="imgContainer">
      <div className="imgContainer__imgBox">
        {/* Responsive image for the first image */}

        <img
          src={firstMobile}
          srcSet={`/src${firstMobile.replace(
            ".",
            ""
          )} 480w, /src${firstTablet.replace(
            ".",
            ""
          )} 768w, /src${firstDesktop.replace(".", "")} 1200w`}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt="Gallery Image 1"
          className="imgContainer__imgBox-img"
        />
        {/* Responsive image for the second image */}
        <img
          src={secondMobile}
          srcSet={`/src${secondMobile.replace(
            ".",
            ""
          )} 480w, /src${secondTablet.replace(
            ".",
            ""
          )} 768w, /src${secondDesktop.replace(".", "")} 1200w`}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt="Gallery Image 2"
          className="imgContainer__imgBox-img"
        />
      </div>
      <div className="imgContainer__imgBigBox">
        {/* Responsive image for the third image */}
        <img
          src={thirdMobile}
          srcSet={`/src${thirdMobile.replace(
            ".",
            ""
          )} 480w, /src${thirdTablet.replace(
            ".",
            ""
          )} 768w, /src${thirdDesktop.replace(".", "")} 1200w`}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt="Gallery Image 3"
          className="imgContainer__imgBox-img"
        />
      </div>
    </div>
  );
}

export default Gallery;
