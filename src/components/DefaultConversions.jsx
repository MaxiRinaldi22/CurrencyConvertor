import { useContext } from "react";
import { CurrencesContext } from "../context/CurrencesContext";

const DEFAUTL_CONVERSION = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];

function Convert({ firstCurrency, secondCurrency, fetchResult }) {
  return (
    <>
      <section className="shadow-custom-shadow h-fit lg:w-[493px] rounded-md bg-white lg:border">
        <div className="flex w-full flex-col items-center justify-between text-center gap-3 bg-[#F2F7FE]">
          <h2 className="mt-5 text-xl font-[600] text-[#00214A]">
            Convert {firstCurrency.title} to {secondCurrency.title}
          </h2>

          <div className="mb-3 flex items-center justify-between gap-44 lg:ml-3 lg:mr-6">
            <div className="flex items-center gap-2">
              <img
                className="h-3"
                src={firstCurrency.img}
                alt={firstCurrency.title}
              />
              <p className="font-[600] text-[#00214A]">
                {firstCurrency.currency}
              </p>
            </div>

            <div className="flex items-center  gap-2">
              <img
                className="h-3"
                src={secondCurrency.img}
                alt={secondCurrency.title}
              />
              <p className="font-[600] text-[#00214A]">
                {secondCurrency.currency}
              </p>
            </div>
          </div>
        </div>
        <section className="mt-2 flex items-center justify-between px-20 pb-3">
          <div>
            <div className="flex flex-col items-center justify-center gap-4">
              {DEFAUTL_CONVERSION.map((value) => (
                <p className="font-[500] text-[#00D37E]" key={value}>
                  {value} {firstCurrency.currency}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
              {DEFAUTL_CONVERSION.map((value) => (
                <p key={value} className="font-[500]">
                  {(value * fetchResult).toFixed(4)} {secondCurrency.currency}
                </p>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

function DefaultConversions({ firstCurrency, secondCurrency }) {
  const { fetchResult } = useContext(CurrencesContext);
  const fetchResultOne = fetchResult || localStorage.getItem("fetchResultOne");
  const fetchResultTwo =
    fetchResult && fetchResult !== 0
      ? (1 / fetchResult).toFixed(3)
      : localStorage.getItem("fetchResultTwo");
      
  localStorage.setItem("fetchResultOne", fetchResultOne);
  localStorage.setItem("fetchResultTwo", fetchResultTwo);

  return (
    <>
      <Convert
        firstCurrency={firstCurrency}
        secondCurrency={secondCurrency}
        fetchResult={fetchResultOne}
      />
      <Convert
        firstCurrency={secondCurrency}
        secondCurrency={firstCurrency}
        fetchResult={fetchResultTwo}
      />
    </>
  );
}

export default DefaultConversions;
