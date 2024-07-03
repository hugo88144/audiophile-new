/* eslint-disable react/prop-types */
import { useData } from "../Context/DataContext";

function ProductFeatures({ index }) {
  const { products, loading, error } = useData();

  if (loading) return null;
  if (error) return null;
  if (!products) return null;

  const productdata = products[index];

  if (!productdata) return null;

  return (
    <div className="features">
      <div className="features__Description">
        <div className="features__Title">FEATURES</div>

        <div key={index} className="features__DescriptionText">
          {productdata.features}
        </div>
      </div>
      <div className="features__includes">
        <div className="features__includes-title">IN THE BOX</div>
        {productdata.includes.map((include, idx) => (
          <div key={idx} className="features__includes-quantityBox">
            <div className="features__includes-quantity">
              <span>{`${include.quantity}x`}</span> {include.item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFeatures;
