import { useEffect, useState } from "react";

const API_KEY = "a5e2941b9083b37fe4739d89037a5131";
export function useCurrences({ firstCurrency, secondCurrency }) {
  const [result, setResult] = useState(0);

  useEffect(() => {
    const URL_ENDPOINT_CONVERT = `https://api.exchangerate.host/convert?from=${firstCurrency.currency}&to=${secondCurrency.currency}&amount=1&access_key=${API_KEY}`;
    fetch(URL_ENDPOINT_CONVERT)
      .then((response) => response.json())
      .then((data) => setResult(data.result))
      .catch((e) => console.error("Error:" + e));
  }, [firstCurrency, secondCurrency]);

  return result;
}
