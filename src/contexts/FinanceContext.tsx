import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  clearLocalStorage,
} from "../utils/localStorage";

interface FinanceContextType {
  income: number;
  expenses: number;
  savings: number;
  setIncome: (value: number) => void;
  setExpenses: (value: number) => void;
  setSavings: (value: number) => void;
  resetFinanceData: () => void; // Add this function to the context
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export const FinanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [income, setIncome] = useState<number>(() =>
    getFromLocalStorage<number>("income", 4000)
  );
  const [expenses, setExpenses] = useState<number>(() =>
    getFromLocalStorage<number>("expenses", 2500)
  );
  const [savings, setSavings] = useState<number>(() =>
    getFromLocalStorage<number>("savings", 1200)
  );

  useEffect(() => {
    saveToLocalStorage("income", income);
  }, [income]);

  useEffect(() => {
    saveToLocalStorage("expenses", expenses);
  }, [expenses]);

  useEffect(() => {
    saveToLocalStorage("savings", savings);
  }, [savings]);

  // Reset function to clear state and localStorage
  const resetFinanceData = () => {
    clearLocalStorage();
    setIncome(4000);
    setExpenses(2500);
    setSavings(1200);
  };

  return (
    <FinanceContext.Provider
      value={{
        income,
        expenses,
        savings,
        setIncome,
        setExpenses,
        setSavings,
        resetFinanceData,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinanceContext = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("useFinanceContext must be used within a FinanceProvider");
  }
  return context;
};
