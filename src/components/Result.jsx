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
      toSecondCurrency: (1 / fetchResult).toFixed(3),
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
        toSecondCurrency: (1 / fetchResult).toFixed(3),
      });
    }, 1500);
  }, [inputValue, firstCurrency, secondCurrency]);

  return (
    <section className="flex flex-col md:flex-col lg:flex-row lg:gap-3">
      {!showResult && (
        <section className="mt-2.5 h-16 rounded-md bg-[#f2f7fe] lg:m-0">
          <div className="flex h-full items-center justify-center gap-2.5 p-2">
            <Info />
            <p className="text-[10px] lg:text-xs">
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              sending money. <a href="">Login to view send rates</a>
            </p>
          </div>
        </section>
      )}
      <div className="mb-3 flex items-center lg:mb-0">
        {showResult && (
          <div className="flex flex-col lg:w-64">
            <h3 className="text-base font-medium">
              {inputValue} {firstCurrency.currency} =
            </h3>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#2e3c57]">
              {result} {secondCurrency.currency}
            </h2>

            <h4 className="text-sm font-normal">
              {`1 ${firstCurrency.currency} = ${oneResult.toFirstCurrency} ${secondCurrency.currency}`}
            </h4>
            <h4 className="text-sm font-normal">
              {`1 ${secondCurrency.currency} = ${oneResult.toSecondCurrency} ${firstCurrency.currency}`}
            </h4>
          </div>
        )}
      </div>

      <div className="flex min-h-12 w-full items-center justify-end">
        {inputValue <= 0 ? (
          <button
            className="conversor-convert-btn min-h-12 w-full rounded-md bg-blue-600 text-lg font-semibold text-white active:bg-[#0a146e] lg:w-28"
            onClick={handleSend}
            disabled
            style={{ background: "#9DC8F7" }}
          >
            Convert
          </button>
        ) : (
          <button
            className="conversor-convert-btn min-h-12 w-full rounded-md bg-blue-600 text-lg font-semibold text-white active:bg-[#0a146e] lg:w-28"
            onClick={handleSend}
          >
            {!showResult ? "Convert" : "Save"}
          </button>
        )}
      </div>
    </section>
  );
}
