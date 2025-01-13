import React, { useState } from "react";

const Dashboard: React.FC = () => {
  // State for financial data
  const [income, setIncome] = useState<number>(4000);
  const [expenses, setExpenses] = useState<number>(2500);
  const [savings, setSavings] = useState<number>(1200);

  // Handlers for updating state
  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIncome(Number(e.target.value));
  const handleExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setExpenses(Number(e.target.value));
  const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSavings(Number(e.target.value));

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <h1 className="dashboard-header">Personal Finance Tracker</h1>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Income</h2>
            <p>${income}</p>
            <input
              type="number"
              value={income}
              onChange={handleIncomeChange}
              className="dashboard-input"
              placeholder="Enter income"
            />
          </div>

          <div className="dashboard-card">
            <h2>Expenses</h2>
            <p>${expenses}</p>
            <input
              type="number"
              value={expenses}
              onChange={handleExpensesChange}
              className="dashboard-input"
              placeholder="Enter expenses"
            />
          </div>

          <div className="dashboard-card">
            <h2>Savings</h2>
            <p>${savings}</p>
            <input
              type="number"
              value={savings}
              onChange={handleSavingsChange}
              className="dashboard-input"
              placeholder="Enter savings"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
