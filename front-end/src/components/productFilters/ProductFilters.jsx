import { useSearchParams } from "react-router-dom";
import "./ProductFilters.css";

const INACCESSIBLE_VALUE = '0';

export const ProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const availabilityParam = searchParams.get('is_salable');

  const isInaccessibleChecked = availabilityParam === INACCESSIBLE_VALUE;

  const onCheckboxChange = (event) => {
    if (!event.target.checked) {
        return;
    }

    setSearchParams(prevSearchParams => {
      if (isInaccessibleChecked) {
        prevSearchParams.delete('is_salable');
      } else {
        prevSearchParams.set('is_salable', INACCESSIBLE_VALUE);
      }
      return prevSearchParams;
    });
  };

  return (
    <div className="ProductFilters">
      <h3>Products:</h3>
      <label>
        <input
          type="checkbox"
          checked={availabilityParam === null}
          onChange={onCheckboxChange}
        />
        Available
      </label>
      <label>
        <input
          type="checkbox"
          checked={isInaccessibleChecked}
          onChange={onCheckboxChange}
        />
        Inaccessible
      </label>
    </div>
  );
};