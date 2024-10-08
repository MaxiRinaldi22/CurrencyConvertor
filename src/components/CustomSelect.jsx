import { Close, DownArrow } from "./Icons";
import { useState } from "react";

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
    <div className="shadow-custom relative flex h-12 items-center justify-center rounded-md border-2 border-gray-300 p-1 text-lg font-medium lg:mb-5">
      <div
        className="flex w-full items-center justify-between"
        onClick={toggleOptions}
      >
        <div className="flex h-4 items-center gap-1 px-2">
          <img
            id="selected-flag"
            src={selectedCountry.img}
            alt={`Bandera de ${selectedCountry.title}`}
          />
          <span className="font-normal">
            {selectedCountry.currency} -
            <span className="font-[300] text-gray-700">
              {" "}
              {selectedCountry.title}
            </span>
          </span>
        </div>

        <DownArrow />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full z-[999] flex h-auto max-h-48 w-[320px] cursor-pointer flex-col gap-1.5 overflow-y-auto bg-white p-0 font-normal">
          <div className="flex h-7 items-center justify-end">
            <button onClick={() => setIsOpen(false)}>
              <Close />
            </button>
          </div>
          {currences.map((country, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center"
              onClick={() => selectOption(country)}
            >
              <img
                className="mx-2.5 max-h-6 min-h-5 w-6 rounded-sm border border-gray-400"
                src={country.img}
                alt={`Bandera de ${country.title}`}
              />
              <span className="font-normal">
                {country.currency} -{" "}
                <span className="font-[300] text-gray-700">
                  {country.title}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
