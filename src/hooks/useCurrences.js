import { useEffect, useState } from "react";
import { API_KEY } from "../services/apiConstants";
import { BASE_URL } from "../services/apiConstants";


export function useCurrences({ firstCurrency, secondCurrency }) {
  const [result, setResult] = useState(0);

  useEffect(() => {
    const URL_ENDPOINT_CONVERT = `${BASE_URL}/convert?from=${firstCurrency.currency}&to=${secondCurrency.currency}&amount=1&access_key=${API_KEY}`;
    fetch(URL_ENDPOINT_CONVERT)
      .then((response) => response.json())
      .then((data) => setResult(data.result))
      .catch((e) => console.error("Error:" + e));
  }, [firstCurrency, secondCurrency]);

  return result;
}