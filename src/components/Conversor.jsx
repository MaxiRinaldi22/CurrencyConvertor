import { useMemo, useState } from "react";
import { Currencies } from "../mocks/currences.json";
import { TransferMobile, TransferPc } from "./Icons";
import { Footer } from "./Footer";
import { CustomSelect } from "./CustomSelect";
import { Result } from "./Result";

function Conversor() {
  const [inputValue, setInputValue] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState(Currencies[0]);
  const [secondCurrency, setSecondCurrency] = useState(Currencies[1]);
  // Resultados
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [click, setClick] = useState(0);
  const [record, setRecord] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSwitchClick = () => {
    setFirstCurrency(secondCurrency);
    setSecondCurrency(firstCurrency);
  };


  useMemo(() => {
    if (result !== "" && inputValue !== 0) {
      const newRecord = {
        inputValue: inputValue,
        firstCurrency: firstCurrency,
        secondCurrency: secondCurrency,
        result: result,
      };

      if (record.length < 3) {
        setRecord([newRecord, ...record]);
      } else {
        setRecord([newRecord, ...record.slice(0, -1)]);
      }
    }
  }, [click]);

  return (
    <section className="flex items-center gap-5 flex-col lg:flex-row lg:mt-20">
      <section className="flex max-h-[500px] w-96 flex-col rounded-md bg-white p-5 shadow-lg lg:h-fit lg:w-[800px] ">
        <div className="mb-2.5 md:h-80 lg:flex lg:items-center lg:justify-between lg:gap-2 lg:max-h-[90px]">
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
              className="px-2 min-h-12 rounded-md border-2 border-gray-300 text-lg shadow-custom focus:border-[#0a146e] focus:outline-none focus:ring-1 focus:ring-[#0a146e] lg:w-60"
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
            result,
            showResult,
            setShowResult,
            setClick,
            setResult,
          }}
        />
      </section>

       <Footer record={record} /> 
    </section>
  );
}

export default Conversor;
