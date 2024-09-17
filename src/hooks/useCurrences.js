import { useEffect, useState } from "react";
import { API_KEY } from "../components/config";

const apiKey = API_KEY; 
export function useCurrences({ firstCurrency, secondCurrency }) {
  const [result, setResult] = useState(0);

  useEffect(() => {
    const URL_ENDPOINT_CONVERT = `https://api.exchangerate.host/convert?from=${firstCurrency.currency}&to=${secondCurrency.currency}&amount=1&access_key=${apiKey}`;
    fetch(URL_ENDPOINT_CONVERT)
      .then((response) => response.json())
      .then((data) => setResult(data.result))
      .catch((e) => console.error("Error:" + e));
  }, [firstCurrency, secondCurrency]);

  return result;
}
