import { useSearchParams } from "react-router-dom";

export function useMultipleCheckbox(arrayParam) {
  const [,setSearchParams] = useSearchParams();

  const handleOnChange = (checkboxValue) => {

    setSearchParams(prevSearchParams => {
      const prevArrayParam = prevSearchParams.getAll(arrayParam);
      const isUncheckChange = prevArrayParam.includes(checkboxValue);

      if (isUncheckChange) {
        prevSearchParams.delete(arrayParam);

        prevArrayParam.forEach(item => {
          const isUncheckedItem = item === checkboxValue;

          if (isUncheckedItem) {
            return;
          }

          if (!prevSearchParams.has(arrayParam)) {
            prevSearchParams.set(arrayParam, item);
            return;
          }

          prevSearchParams.append(arrayParam, item);
        });

        return prevSearchParams;
      }

      if (!prevArrayParam.length) {
        prevSearchParams.set(arrayParam, checkboxValue);
        return prevSearchParams;
      }

      prevSearchParams.append(arrayParam, checkboxValue);
      return prevSearchParams;
    });

  };

  return {
    handleOnChange
  };
}