import { useContext, useState } from "react";
import { FinanceContext } from "../contexts/FinanceContext";

// Hook to access FinanceContext
export const useFinanceContext = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("useFinanceContext must be used within a FinanceProvider");
  }
  return context;
};

// Hook to manage amount value
export const useAmount = () => {
  const [amountValue, setAmountValue] = useState<number>(0);
  return { amountValue, setAmountValue };
};

// Hook to manage category value
export const useCategory = () => {
  const [category, setCategory] = useState<string>("");
  return { category, setCategory };
};

// Hook to manage transaction type
export const useType = () => {
  const [type, setType] = useState<string>("Income");
  return { type, setType };
};
