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
  prevIncome: number;
  prevExpenses: number;
  transactionHistory: Transaction[];
  setIncome: (value: number) => void;
  setExpenses: (value: number) => void;
  setTransactionHistory: (history: Transaction[]) => void;
  resetFinanceData: () => void;
  handleDeleteTransaction: (index: number) => void; // Move the delete function here
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
  const [prevIncome, setPrevIncome] = useState<number>(0);
  const [prevExpenses, setPrevExpenses] = useState<number>(0);

  useEffect(() => {
    setSavings(income - expenses);
    setPrevIncome(income);
    setPrevExpenses(expenses);
  }, [income, expenses]);

  const resetFinanceData = () => {
    setIncome(4000);
    setExpenses(2500);
    setSavings(income - expenses);
    setTransactionHistory([]);
  };

  // Move the delete logic here
  const handleDeleteTransaction = (index: number): void => {
    const updatedHistory = transactionHistory.filter((_, i) => i !== index);
    setTransactionHistory(updatedHistory);

    // Recalculate income and expenses based on updated transaction history
    let newIncome = 0;
    let newExpenses = 0;
    updatedHistory.forEach((transaction) => {
      if (transaction.type === "Income") {
        newIncome += transaction.amount;
      } else if (transaction.type === "Expense") {
        newExpenses += transaction.amount;
      }
    });

    setIncome(newIncome);
    setExpenses(newExpenses);
  };

  return (
    <FinanceContext.Provider
      value={{
        income,
        expenses,
        savings,
        prevIncome,
        prevExpenses,
        transactionHistory,
        setIncome,
        setExpenses,
        setTransactionHistory,
        resetFinanceData,
        handleDeleteTransaction, // Provide the function here
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
