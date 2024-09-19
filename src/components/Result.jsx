import { useContext, useEffect, useState } from "react";
import { Info } from "./Icons";
import { CurrencesContext } from "../context/CurrencesContext";

export function Result({ conversorProps, resultsProps }) {
  const { inputValue, firstCurrency, secondCurrency } = conversorProps;
  const { showResult, setShowResult, mianResult, setMainResult } = resultsProps;
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
      <div className="mb-3 flex w-full lg:mb-7">
        {showResult && (
          <div className="flex flex-col border-l-2 border-[#00D37E] px-2 lg:w-full lg:gap-0.5">
            <h3 className="text-base font-medium lg:px-1 lg:text-lg">
              {inputValue} {firstCurrency.currency} =
            </h3>

            <h2 className="text-2xl font-bold text-[#2e3c57] lg:text-5xl">
              {resultMsg} {secondCurrency.currency}
            </h2>

            <div className="mt-1 lg:mt-3">
              <h4 className="lg:text-md text-sm font-normal lg:px-1">
                {`1 ${firstCurrency.currency} = ${oneResult.toFirstCurrency} ${secondCurrency.currency}`}
              </h4>
              <h4 className="lg:text-md text-sm font-normal lg:px-1">
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
              className="conversor-convert-btn min-h-12 w-full rounded-md bg-[#0f428181] text-lg font-semibold text-white active:bg-[#0a146e] lg:w-52"
              onClick={handleSend}
              disabled
            >
              Convert
            </button>
          ) : !showResult ? (
            <button
              className="conversor-convert-btn min-h-12 w-full rounded-md bg-[#00D37E] text-lg font-semibold text-white active:bg-[#0a146e] lg:w-52"
              onClick={handleSend}
            >
              Convert
            </button>
          ) : (
            <button
              className="conversor-convert-btn min-h-12 w-full rounded-md bg-[#00D37E] text-lg font-semibold text-white active:bg-[#0a146e] lg:w-52"
              onClick={handleSend}
            >
              <a target="_blank" href="https://exchangerate.host/">
                View transfer quote
              </a>
            </button>
          )}
        </div>

        <div className="mt-2.5 h-16 rounded-md bg-[#f2f7fe] lg:m-0">
          <div className="flex h-full items-center justify-center gap-2.5 p-2">
            <Info />
            <p className="text-[10px] lg:text-xs">
              This converter is for educational purposes only. The rates are not
              real-time and should not be used for actual transactions. Practice
              using this tool to learn about currency exchange.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
