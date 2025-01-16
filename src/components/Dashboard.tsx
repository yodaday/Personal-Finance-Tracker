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
    savingsGoal,
    transactionHistory,
    setIncome,
    setExpenses,
    handleDeleteTransaction,
    setSavingsGoal,
  } = useFinanceContext();

  const [isIncomeExpanded, setIsIncomeExpanded] = useState(false);
  const [isExpensesExpanded, setIsExpensesExpanded] = useState(false);
  const [newGoal, setNewGoal] = useState<number>(0);
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);

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

  const handleSetGoal = () => {
    setSavingsGoal(newGoal);
    setShowGoalModal(false); // Close modal after setting goal
  };

  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(Number(event.target.value));
  };

  const handleGoalModalOpen = () => {
    setShowGoalModal(true);
  };

  const handleGoalModalClose = () => {
    setShowGoalModal(false);
  };

  const resetGoal = () => {
    setSavingsGoal(0); // Reset goal after achieving
  };

  const goalReached = savings >= savingsGoal;

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
            {goalReached ? (
              <div className="mt-4 text-green-600">
                <p>You have achieved your savings goal!</p>
                <button onClick={resetGoal} className="text-blue-500">
                  Reset Goal
                </button>
                <button
                  onClick={handleGoalModalOpen}
                  className="text-blue-500 ml-4"
                >
                  Set New Goal
                </button>
              </div>
            ) : (
              <p>
                {savingsGoal > 0
                  ? `Goal: $${savingsGoal}`
                  : "No savings goal set yet."}
              </p>
            )}
          </div>
        </div>
      </div>
      <TransactionList />
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Financial Overview Chart</h2>
        <FinanceChart income={income} expenses={expenses} savings={savings} />
      </div>

      {/* Modal for setting new savings goal */}
      {showGoalModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl mb-4">Set New Savings Goal</h3>
            <input
              type="number"
              className="p-2 border mb-4"
              placeholder="Enter new savings goal"
              value={newGoal}
              onChange={handleGoalChange}
            />
            <div className="flex justify-between">
              <button
                onClick={handleSetGoal}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Set Goal
              </button>
              <button
                onClick={handleGoalModalClose}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
