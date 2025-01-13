import React from "react";
import { useFinanceContext } from "../contexts/FinanceContext";

const Dashboard: React.FC = () => {
  const { income, expenses, savings, resetFinanceData } = useFinanceContext();

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <h1 className="dashboard-header">Personal Finance Tracker</h1>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Income</h2>
            <p>{`$${income}`}</p>
          </div>
          <div className="dashboard-card">
            <h2>Expenses</h2>
            <p>{`$${expenses}`}</p>
          </div>
          <div className="dashboard-card">
            <h2>Savings</h2>
            <p>{`$${savings}`}</p>
          </div>
        </div>
        <button
          onClick={resetFinanceData}
          className="reset-button bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Reset Data
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
