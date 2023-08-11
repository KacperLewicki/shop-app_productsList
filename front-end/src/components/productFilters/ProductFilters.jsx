import { useSearchParams } from "react-router-dom";
import "./ProductFilters.css";

export const ProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const availabilityParam = searchParams.get('is_salable');
  const isChecked = availabilityParam === "1";

  const onAvailabilityChange = () => {
    setSearchParams(prevSearchParams => {
      if (isChecked) {
        prevSearchParams.delete('is_salable');
      } else {
        prevSearchParams.set('is_salable', '1');
      }
      return prevSearchParams;
    });
  };

  const onInaccessibleChange = () => {
    setSearchParams(prevSearchParams => {
      if (isChecked) {
        prevSearchParams.set('is_salable', '0');
      } else {
        prevSearchParams.delete('is_salable');
      }
      return prevSearchParams;
    });
  };

  return (
    
    <div className="ProductFilters">
      <h3>Products:</h3>
      <label className={`available ${isChecked ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onAvailabilityChange}
        />
        Available
      </label>
      <label className={`inaccessible ${!isChecked ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={!isChecked}
          onChange={onInaccessibleChange}
        />
        Inaccessible
      </label>
    </div>
  );
};