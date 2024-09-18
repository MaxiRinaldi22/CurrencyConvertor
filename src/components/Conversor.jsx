import { useMemo, useState } from "react";
import { Currencies } from "../mocks/currences.json";
import { TransferMobile, TransferPc } from "./Icons";
import { CustomSelect } from "./CustomSelect";
import { Result } from "./Result";

import DefaultConversions from "./DefaultConversions";
import { CurrencesProvider } from "../context/CurrencesContext";

function Conversor() {
  const [inputValue, setInputValue] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState(Currencies[0]);
  const [secondCurrency, setSecondCurrency] = useState(Currencies[1]);

  // Resultados
  const [mianResult, setMainResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [click, setClick] = useState(0);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSwitchClick = () => {
    setFirstCurrency(secondCurrency);
    setSecondCurrency(firstCurrency);
  };


  return (
    <CurrencesProvider
      firstCurrency={firstCurrency}
      secondCurrency={secondCurrency}
    >
      <section className="flex flex-col items-center gap-5 lg:mt-10 lg:flex-row">
        <section className="shadow-custom-shadow flex h-fit w-96 flex-col rounded-md bg-white p-5 lg:h-[22rem] lg:w-[1000px] lg:justify-between">
          <div className="mb-2.5 md:h-80 lg:flex lg:max-h-[90px] lg:items-center lg:justify-between lg:gap-2">

            <div className="flex flex-col">
              <label htmlFor="imputValue" className="mb-0.5 font-bold lg:mb-0">
                Amount
              </label>
              <input
                style={
                  inputValue > 0
                    ? { marginBottom: "20px" }
                    : { marginBottom: "0px" }
                }
                id="imputValue"
                className="min-h-12 rounded-md border-2 border-gray-300 px-2 text-lg shadow-custom focus:border-[#0a146e] focus:outline-none focus:ring-1 focus:ring-[#0a146e] lg:w-60"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
              />

              {inputValue <= 0 && (
                <p className="text-sm text-red-600">
                  Please enter an amount greater than 0
                </p>
              )}
            </div>

            <div className="flex h-full flex-col gap-2 lg:w-full lg:flex-row">
              <div className="w-full">
                <label htmlFor="currency1" className="font-[600]">
                  From
                </label>

                <CustomSelect
                  currences={Currencies}
                  selectedCountry={firstCurrency}
                  onSelectCountry={setFirstCurrency}
                />
              </div>

              <div className="flex items-center lg:justify-center">
                <button
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-gray-300 bg-transparent shadow-custom"
                  onClick={handleSwitchClick}
                >
                  <div className="lg:hidden">
                    <TransferMobile />
                  </div>
                  <div className="hidden lg:block">
                    <TransferPc />
                  </div>
                </button>
              </div>

              <div className="lg:w-full">
                <label htmlFor="currency2" className="font-[600]">
                  To
                </label>
                <CustomSelect
                  currences={Currencies}
                  selectedCountry={secondCurrency}
                  onSelectCountry={setSecondCurrency}
                />
              </div>
            </div>
          </div>

          <Result
            resultProps={{
              inputValue,
              firstCurrency,
              secondCurrency,
              setClick,
              showResult,
              setShowResult,
              mianResult,
              setMainResult,
            }}
          />
        </section>

      
      </section>
   
        <section className="mt-24 flex w-96 flex-col justify-center gap-4 lg:w-[1042px] lg:flex-row">
          <DefaultConversions
            firstCurrency={firstCurrency}
            secondCurrency={secondCurrency}
          />
        </section>
   
    </CurrencesProvider>
  );
}

export default Conversor;
