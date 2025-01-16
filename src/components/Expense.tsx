import React, { useState } from "react";
import { useFinanceContext } from "../hooks/hooks";
import { Transaction } from "../contexts/FinanceContext";

const Expense: React.FC = () => {
  const { expenses, setExpenses, setTransactionHistory } = useFinanceContext();
  const [expenseValue, setExpenseValue] = useState<number>(expenses);
  const [expenseCategory, setExpenseCategory] = useState<string>("");

  const handleExpenseChange = () => {
    setExpenses(expenseValue);
    setTransactionHistory((prevHistory: Transaction[]) => [
      ...prevHistory,
      { type: "Expense", amount: expenseValue, category: expenseCategory },
    ]);
  };

  return (
    <div className="p-4 bg-red-200 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Expense</h2>
      <input
        type="number"
        className="p-2 border rounded-md w-full mb-2"
        value={expenseValue}
        onChange={(e) => setExpenseValue(parseFloat(e.target.value))}
        placeholder="Enter your expense"
      />
      <input
        type="text"
        className="p-2 border rounded-md w-full mb-2"
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
        placeholder="Enter expense category (e.g., Rent)"
      />
      <button
        onClick={handleExpenseChange}
        className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
      >
        OK
      </button>
    </div>
  );
};

export default Expense;
