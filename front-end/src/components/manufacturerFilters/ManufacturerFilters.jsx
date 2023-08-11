import React, { useState, useContext } from "react";
import { ProductsContext } from "../../context/Products/ProductsContext";
import "./ManufacturerFilters.css";

export const ManufacturerFilters = () => {
  const { products } = useContext(ProductsContext);
  const manufacturers = [...new Set(products.map(product => product.manufacturer))];

  const [selectedManufacturers, setSelectedManufacturers] = useState([]);

  const handleManufacturerChange = (manufacturer) => {
    const updatedSelectedManufacturers = selectedManufacturers.includes(manufacturer)
      ? selectedManufacturers.filter(item => item !== manufacturer)
      : [...selectedManufacturers, manufacturer];

    setSelectedManufacturers(updatedSelectedManufacturers);
  };

  return (
    <div className="manufacturer-filters">
      <h3>Manufacturers:</h3>
      {manufacturers.map(manufacturer => (
        <label key={manufacturer}>
          <input
            type="checkbox"
            checked={selectedManufacturers.includes(manufacturer)}
            onChange={() => handleManufacturerChange(manufacturer)}
          />
          {manufacturer}
        </label>
      ))}
    </div>
  );
};