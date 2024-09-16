import { Close, DownArrow } from "./Icons";
import { useState } from "react";
import "./Select.css";

export function CustomSelect({ currences, selectedCountry, onSelectCountry }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (country) => {
    onSelectCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="select-box" onClick={toggleOptions}>
        <div>
          <img
            id="selected-flag"
            src={selectedCountry.img}
            alt={`Bandera de ${selectedCountry.title}`}
          />
          <span className="selected-currence">
            {selectedCountry.currency} -
            <span className="descripiton"> {selectedCountry.title}</span>
          </span>
        </div>

        <DownArrow />
      </div>
      {isOpen && (
        <div className="options-container">
          <div className="container-close">
            <button onClick={() => setIsOpen(false)}>
              <Close />
            </button>
          </div>
          {currences.map((country, index) => (
            <div
              key={index}
              className="option"
              onClick={() => selectOption(country)}
            >
              <img src={country.img} alt={`Bandera de ${country.title}`} />
              <span>
                {country.currency} - {" "}
                <span className="descripiton">{country.title}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
