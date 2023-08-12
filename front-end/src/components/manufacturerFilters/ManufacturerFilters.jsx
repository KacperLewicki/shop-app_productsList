import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { useMultipleCheckbox } from "../../hooks/useMultipleCheckbox";
import "./ManufacturerFilters.css";

export const ManufacturerFilters = () => {
  const [searchParams] = useSearchParams();
  const { products } = useContext(ProductsContext);
  const manufacturerArrayParam = searchParams.getAll('manufacturer[]');
  const { handleOnChange } = useMultipleCheckbox('manufacturer[]');

  const manufacturerTypes = [...new Set(products.map(product => product.manufacturer))];

  return (
    <div className="manufacturer-filters">
      <h3>Manufacturers:</h3>
      {manufacturerTypes.map(manufacturer => (
        <label key={manufacturer}>
          <input
            type="checkbox"
            checked={manufacturerArrayParam.includes(manufacturer)}
            onChange={() => handleOnChange(manufacturer)}
          />
          {manufacturer}
        </label>
      ))}
    </div>
  );
};