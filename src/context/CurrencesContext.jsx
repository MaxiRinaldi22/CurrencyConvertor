import { createContext } from "react";
import { useCurrences } from "../hooks/useCurrences";


export const CurrencesContext = createContext();

export function CurrencesProvider({ children, firstCurrency, secondCurrency }) {
  const fetchResult = useCurrences({ firstCurrency, secondCurrency });

  return (
    <CurrencesContext.Provider value={{ fetchResult }}>
      {children}
    </CurrencesContext.Provider>
  );
}