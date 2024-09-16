import { useMemo, useState } from "react";
import { Currencies } from "../mocks/currences.json";
import { Transfer } from "./Icons";
import { Footer } from "./Footer";
import { CustomSelect } from "./CustomSelect";
import { Result } from "./Result";

export function Conversor() {
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

  const today = new Date();
  const min = today.getMinutes();
  const hrs = today.getHours();

  useMemo(() => {
    if (result !== "" && inputValue !== 0) {
      const newRecord = {
        inputValue: inputValue,
        firstCurrency: firstCurrency,
        secondCurrency: secondCurrency,
        result: result,
        hrs: hrs,
        min: min,
      };

      if (record.length < 5) {
        setRecord([newRecord, ...record]);
      } else {
        setRecord([newRecord, ...record.slice(0, -1)]);
      }
    }
  }, [click]);

  return (
    <>
      <section className="container-conversor">
        <div className="conversor-main">
          <div>
            <label htmlFor="imputValue" className="label-value">
              Amount
            </label>
            <input
              id="imputValue"
              className="input-value"
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />

            {inputValue <= 0 && (
              <p className="error-msg">Please enter an amount greater than 0</p>
            )}
          </div>

          <div className="container-selects">
            <div
              style={
                inputValue > 0 ? { marginTop: "23px" } : { marginTop: "0px" }
              }
            >
              <label htmlFor="currency1" className="label-value">
                From
              </label>

              <CustomSelect
                currences={Currencies}
                selectedCountry={firstCurrency}
                onSelectCountry={setFirstCurrency}
              />
            </div>

            <div className="container-btn-trasfer">
              <button
                className="conversor-btn-trasnfer"
                onClick={handleSwitchClick}
              >
                <Transfer />
              </button>
            </div>

            <div>
              <label htmlFor="currency2" className="label-value">
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
    </>
  );
}
