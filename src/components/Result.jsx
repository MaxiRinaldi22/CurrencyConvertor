import { useContext, useEffect, useState } from "react";
import { Info } from "./Icons";
import { CurrencesContext } from "../context/CurrencesContext";

export function Result({ resultProps }) {
  const {
    showResult,
    inputValue,
    setShowResult,
    secondCurrency,
    firstCurrency,
    setClick,
    mianResult,
    setMainResult,
  } = resultProps;

  const { fetchResult } = useContext(CurrencesContext);

  const [oneResult, setOneResult] = useState({
    toSecondCurrency: 1,
    toFirstCurrency: 1,
  });

  setMainResult((fetchResult * inputValue).toFixed(5));
  const handleSend = () => {
    setOneResult({
      toFirstCurrency: fetchResult,
      toSecondCurrency: (1 / fetchResult).toFixed(3),
    });

    setClick((n) => n + 1);
    setShowResult(true);
  };

  useEffect(() => {
    setMainResult((fetchResult * inputValue).toFixed(5));
    setOneResult({
      toFirstCurrency: fetchResult,
      toSecondCurrency: (1 / fetchResult).toFixed(3),
    });
  }, [inputValue, firstCurrency, secondCurrency]);

  const resultMsg =
    mianResult !== undefined && !isNaN(mianResult)
      ? mianResult
      : "Conection Error";

  return (
    <section className="flex flex-col md:flex-col">
      <div className="mb-3 flex w-full lg:mb-0 lg:h-36">
        {showResult && (
          <div className="flex flex-col lg:w-full lg:gap-1">
            <h3 className="text-base font-medium lg:text-lg">
              {inputValue} {firstCurrency.currency} =
            </h3>

            <h2 className="text-2xl font-bold text-[#2e3c57] lg:text-5xl">
              {resultMsg} {secondCurrency.currency}
            </h2>

            <div>
              <h4 className="lg:text-md text-sm font-normal">
                {`1 ${firstCurrency.currency} = ${oneResult.toFirstCurrency} ${secondCurrency.currency}`}
              </h4>
              <h4 className="lg:text-md text-sm font-normal">
                {`1 ${secondCurrency.currency} = ${oneResult.toSecondCurrency} ${firstCurrency.currency}`}
              </h4>
            </div>
          </div>
        )}
      </div>

      <section className="lg:flex lg:flex-row-reverse">
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
              className="conversor-convert-btn min-h-12 w-full rounded-md bg-blue-600 text-lg font-semibold text-white active:bg-[#0a146e] lg:w-52"
              onClick={handleSend}
            >
              {!showResult ? "Convert" : "View transfer quote"}
            </button>
          )}
        </div>

        <div className="mt-2.5 h-16 rounded-md bg-[#f2f7fe] lg:m-0">
          <div className="flex h-full items-center justify-center gap-2.5 p-2">
            <Info />
            <p className="text-[10px] lg:text-xs">
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              sending money. <a href="">Login to view send rates</a>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
