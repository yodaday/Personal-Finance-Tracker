import React from "react";
import {
  useFinanceContext,
  useAmount,
  useCategory,
  useType,
} from "../hooks/hooks";

const Income: React.FC = () => {
  const { income, expenses, setIncome, setExpenses, setTransactionHistory } =
    useFinanceContext();
  const { amountValue, setAmountValue } = useAmount();
  const { category, setCategory } = useCategory();
  const { type, setType } = useType();

  const handleTransactionChange = () => {
    // Validation
    if (amountValue <= 0) {
      alert("Amount should be greater than 0.");
      return;
    }
    if (!category.trim()) {
      alert("Category is required.");
      return;
    }

    // Update income or expenses explicitly based on transaction type
    if (type === "Income") {
      setIncome(income + amountValue);
    } else if (type === "Expense") {
      setExpenses(expenses + amountValue);
    }

    // Add transaction to history
    setTransactionHistory((prevHistory) => [
      ...prevHistory,
      { type, amount: amountValue, category },
    ]);

    // Reset inputs
    setAmountValue(0);
    setCategory("");
  };

  return (
    <div className="p-4 bg-green-200 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Transaction</h2>
      {/* Dropdown for type selection */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded-md w-full mb-4"
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      {/* Input for amount */}
      <input
        type="number"
        className="p-2 border rounded-md w-full mb-4"
        value={amountValue}
        onChange={(e) => setAmountValue(parseFloat(e.target.value))}
        placeholder={`Enter ${type} amount`}
      />
      {/* Input for category */}
      <input
        type="text"
        className="p-2 border rounded-md w-full mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder={`Enter ${type} category (e.g., Salary, Rent)`}
      />
      {/* OK button */}
      <button
        onClick={handleTransactionChange}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
      >
        OK
      </button>
    </div>
  );
};

export default Income;
