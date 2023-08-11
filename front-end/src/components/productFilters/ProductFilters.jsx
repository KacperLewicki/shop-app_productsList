import { useSearchParams } from "react-router-dom";

export const ProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const availabilityParam = searchParams.get('is_salable');

  const onAvailabilityChange = (e) => {
    const { value } = e.target;

    if (value === "1") {
      setSearchParams(prevSearchParams => {
        prevSearchParams.delete('is_salable');
        return prevSearchParams;
      });
      return;
    }

    setSearchParams(prevSearchParams => {
      prevSearchParams.set('is_salable', value);
      return prevSearchParams;
    });
  }

  return (
    <div>
      <select onChange={onAvailabilityChange} defaultValue={availabilityParam ? "0" : "1"}>
        <option value="1">Available</option>
        <option value="0">Not available</option>
      </select>
    </div>
  )
}
