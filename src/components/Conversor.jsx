import { useState } from "react";
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
      <section className="flex flex-col items-center justify-center lg:flex-row w-full h-[90vh] lg:h-[70vh] bg-gradient-to-b from-[#00214A] via-[#00214A]/20 to-white ">
        <section className="flex h-fit w-96 flex-col rounded-md bg-white p-5 shadow-custom-shadow lg:h-fit lg:w-[1000px] lg:justify-between">
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
                className="shadow-custom min-h-12 rounded-md border-2 border-gray-300 px-2 text-lg focus:border-[#00D37E] focus:outline-none focus:ring-1 focus:ring-[#00D37E] sm:text-[16px] lg:text-lg lg:w-60"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
              />

              {inputValue <= 0 && (
                <p className="text-sm text-[#00D37E]">
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
                  className="shadow-custom flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-gray-300 bg-transparent"
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
            conversorProps={{
              inputValue,
              firstCurrency,
              secondCurrency,
            }}
            resultsProps={{
              showResult,
              setShowResult,
              mianResult,
              setMainResult,
            }}
          />
        </section>
      </section>

      <section className=" flex w-96 flex-col justify-center gap-4 lg:w-[1042px] lg:flex-row">
        <DefaultConversions
          firstCurrency={firstCurrency}
          secondCurrency={secondCurrency}
        />
      </section>
    </CurrencesProvider>
  );
}

export default Conversor;
