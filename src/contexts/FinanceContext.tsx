import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface FinanceContextType {
  income: number;
  expenses: number;
  savings: number;
  setIncome: (value: number) => void;
  setExpenses: (value: number) => void;
  setSavings: (value: number) => void;
}

// Create the context
const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

// Provider component
export const FinanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [income, setIncome] = useState<number>(4000);
  const [expenses, setExpenses] = useState<number>(2500);
  const [savings, setSavings] = useState<number>(1200);

  return (
    <FinanceContext.Provider
      value={{ income, expenses, savings, setIncome, setExpenses, setSavings }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

// Custom hook for consuming the context
export const useFinanceContext = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("useFinanceContext must be used within a FinanceProvider");
  }
  return context;
};
