import React from "react";
import { useFinanceContext } from "../contexts/FinanceContext";
import "../styles/dash.css";

const Dashboard: React.FC = () => {
  const { income, expenses, savings, setIncome, setExpenses, setSavings } =
    useFinanceContext();

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
              onChange={(e) => setIncome(Number(e.target.value))}
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
              onChange={(e) => setExpenses(Number(e.target.value))}
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
              onChange={(e) => setSavings(Number(e.target.value))}
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
