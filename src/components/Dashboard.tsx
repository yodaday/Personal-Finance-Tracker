import React, { useState } from "react";
import Income from "./Income";
import TransactionList from "./TransactionList";
import { useFinanceContext } from "../hooks/hooks";
import FinanceChart from "./FinanceChart";

const Dashboard: React.FC = () => {
  const {
    income,
    expenses,
    savings,
    transactionHistory,
    setIncome,
    setExpenses,
    handleDeleteTransaction,
  } = useFinanceContext();

  const [isIncomeExpanded, setIsIncomeExpanded] = useState(false);
  const [isExpensesExpanded, setIsExpensesExpanded] = useState(false);

  const toggleIncomeExpansion = () => setIsIncomeExpanded(!isIncomeExpanded);
  const toggleExpensesExpansion = () =>
    setIsExpensesExpanded(!isExpensesExpanded);

  // Filter transactions by type
  const incomeTransactions = transactionHistory.filter(
    (t) => t.type === "Income"
  );
  const expenseTransactions = transactionHistory.filter(
    (t) => t.type === "Expense"
  );

  return (
    <div className="dashboard-container p-8">
      <h1 className="text-2xl font-bold mb-6">Personal Finance Tracker</h1>
      <Income />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-200 rounded-lg shadow-md">
            <h3 className="font-semibold">Income</h3>
            <p>${income}</p>
            <button onClick={toggleIncomeExpansion} className="text-blue-500">
              {isIncomeExpanded ? "Hide Income Details" : "Show Income Details"}
            </button>
            {isIncomeExpanded && (
              <ul>
                {incomeTransactions.map((transaction, index) => (
                  <li key={index} className="p-2">
                    <span>
                      {transaction.category} - ${transaction.amount.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleDeleteTransaction(index)}
                      className="ml-4 px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-4 bg-red-200 rounded-lg shadow-md">
            <h3 className="font-semibold">Expenses</h3>
            <p>${expenses}</p>
            <button onClick={toggleExpensesExpansion} className="text-blue-500">
              {isExpensesExpanded
                ? "Hide Expense Details"
                : "Show Expense Details"}
            </button>
            {isExpensesExpanded && (
              <ul>
                {expenseTransactions.map((transaction, index) => (
                  <li key={index} className="p-2">
                    <span>
                      {transaction.category} - ${transaction.amount.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleDeleteTransaction(index)}
                      className="ml-4 px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg shadow-md">
            <h3 className="font-semibold">Savings</h3>
            <p>${savings}</p>
          </div>
        </div>
      </div>
      <TransactionList />
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Financial Overview Chart</h2>
        <FinanceChart income={income} expenses={expenses} savings={savings} />
      </div>
    </div>
  );
};

export default Dashboard;
