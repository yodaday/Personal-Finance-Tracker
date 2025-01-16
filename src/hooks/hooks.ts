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

// Hook to manage amount value from income
export const useAmount = () => {
  const [amountValue, setAmountValue] = useState<number>(0);
  return { amountValue, setAmountValue };
};

// Hook to manage category value from income
export const useCategory = () => {
  const [category, setCategory] = useState<string>("");
  return { category, setCategory };
};

// Hook to manage transaction type from income
export const useType = () => {
  const [type, setType] = useState<string>("Income");
  return { type, setType };
};

////////// Expense Hooks //////////
// Hook to manage expense value from expense
export const useExpenseValue = (initialValue: number = 0) => {
  const [expenseValue, setExpenseValue] = useState<number>(initialValue);
  return { expenseValue, setExpenseValue };
};

// Hook to manage expense category from expense
export const useExpenseCategory = () => {
  const [expenseCategory, setExpenseCategory] = useState<string>("");
  return { expenseCategory, setExpenseCategory };
};

////////// Savings Hooks //////////

export const useSavings = () => {
  const { saving } = useFinanceContext();
  return saving;
};

////////// TransactionList Hooks //////////

export const useTransactions = () => {
  const { transactionHistory, deleteTransaction } = useFinanceContext();
  return { transactionHistory, deleteTransaction };
};

//////FinanceContext.tsx Hooks//////
