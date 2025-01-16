import React from "react";
import {
  useFinanceContext,
  useExpenseValue,
  useExpenseCategory,
} from "../hooks/hooks";

const Expense: React.FC = () => {
  const { expenses, setExpenses, setTransactionHistory } = useFinanceContext();
  const { expenseValue, setExpenseValue } = useExpenseValue(expenses); // Pass initial value from context
  const { expenseCategory, setExpenseCategory } = useExpenseCategory();

  const handleExpenseChange = () => {
    // Update the context values
    setExpenses(expenseValue);
    setTransactionHistory((prevHistory) => [
      ...prevHistory,
      { type: "Expense", amount: expenseValue, category: expenseCategory },
    ]);

    // Reset inputs
    setExpenseValue(0);
    setExpenseCategory("");
  };

  return (
    <div className="p-4 bg-red-200 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Expense</h2>
      {/* Input for expense amount */}
      <input
        type="number"
        className="p-2 border rounded-md w-full mb-2"
        value={expenseValue}
        onChange={(e) => setExpenseValue(parseFloat(e.target.value))}
        placeholder="Enter your expense"
      />
      {/* Input for expense category */}
      <input
        type="text"
        className="p-2 border rounded-md w-full mb-2"
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
        placeholder="Enter expense category (e.g., Rent)"
      />
      {/* OK button */}
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
