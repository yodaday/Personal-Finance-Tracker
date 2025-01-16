import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

export interface Transaction {
  type: string;
  amount: number;
  category: string;
}

export interface FinanceContextType {
  income: number;
  expenses: number;
  savings: number;
  prevIncome: number; // Track previous income value
  prevExpenses: number; // Track previous expenses value
  transactionHistory: Transaction[];
  setIncome: (value: number) => void;
  setExpenses: (value: number) => void;
  setTransactionHistory: (history: Transaction[]) => void;
  resetFinanceData: () => void;
  deleteTransaction: (index: number) => void;
}

export const FinanceContext = createContext<FinanceContextType | undefined>(
  undefined
);

export const FinanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [savings, setSavings] = useState<number>(income - expenses);
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>(
    []
  );
  const [prevIncome, setPrevIncome] = useState<number>(0); // Track previous income
  const [prevExpenses, setPrevExpenses] = useState<number>(0); // Track previous expenses

  useEffect(() => {
    setSavings(income - expenses);
    setPrevIncome(income); // Update previous income whenever it changes
    setPrevExpenses(expenses); // Update previous expenses whenever it changes
  }, [income, expenses]);

  const resetFinanceData = () => {
    setIncome(4000);
    setExpenses(2500);
    setSavings(income - expenses);
    setTransactionHistory([]);
  };

  const deleteTransaction = (index: number) => {
    setTransactionHistory((prevHistory) =>
      prevHistory.filter((_, i) => i !== index)
    );
  };

  return (
    <FinanceContext.Provider
      value={{
        income,
        expenses,
        savings,
        prevIncome, // Provide prevIncome in context
        prevExpenses, // Provide prevExpenses in context
        transactionHistory,
        setIncome,
        setExpenses,
        setTransactionHistory,
        resetFinanceData,
        deleteTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

// Custom hook to use context
export const useFinanceContext = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("useFinanceContext must be used within a FinanceProvider");
  }
  return context;
};
