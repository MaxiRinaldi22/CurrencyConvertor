import { useEffect, useState } from "react";
import { Info } from "./Icons";
import { useCurrences } from "../hooks/useCurrences";

export function Result({ resultProps }) {
  const {
    showResult,
    inputValue,
    setShowResult,
    result,
    secondCurrency,
    firstCurrency,
    setClick,
    setResult,
  } = resultProps;

  const [oneResult, setOneResult] = useState({
    toSecondCurrency: 1,
    toFirstCurrency: 1,
  });
  
  const fetchResult = useCurrences({ firstCurrency, secondCurrency });
  const handleSend = () => {
    setResult((fetchResult * inputValue).toFixed(5));
    setOneResult({
      toFirstCurrency: fetchResult,
      toSecondCurrency: 1 / fetchResult,
    });

    setClick((n) => n + 1);
    setShowResult(true);
  };

  // ACA TIENE QUE ESTAR EL HOOK
  useEffect(() => {
    setTimeout(() => {
      setResult((fetchResult * inputValue).toFixed(5));
      setOneResult({
        toFirstCurrency: fetchResult,
        toSecondCurrency: 1 / fetchResult,
      });
    }, 1500);
  }, [inputValue, firstCurrency, secondCurrency]);

  return (
    <>
      <div className="conversor-result">
        {showResult && (
          <div style={{ width: "100%", height: "110px" }}>
            <h3>
              {inputValue} {firstCurrency.currency} =
            </h3>

            <h2>
              {result} {secondCurrency.currency}
            </h2>

            <h4>
              {`1 ${firstCurrency.currency} = ${oneResult.toFirstCurrency} ${secondCurrency.currency}`}
            </h4>
            <h4>
              {`1 ${secondCurrency.currency} = ${oneResult.toSecondCurrency} ${firstCurrency.currency}`}
            </h4>
          </div>
        )}
      </div>

      <div className="container-convert-btn">
        {inputValue <= 0 ? (
          <button
            className="conversor-convert-btn"
            onClick={handleSend}
            disabled
            style={{ background: "#9DC8F7" }}
          >
            Convert
          </button>
        ) : (
          <button className="conversor-convert-btn" onClick={handleSend}>
            {!showResult ? "Convert" : "Save"}
          </button>
        )}
      </div>

      {!showResult && (
        <section className="container-info">
          <div className="info">
            <Info />
            <p>
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              sending money. <a href="">Login to view send rates</a>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
