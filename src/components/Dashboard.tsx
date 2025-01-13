import React from "react";
import { useFinanceContext } from "../contexts/FinanceContext";
import FinanceChart from "./FinanceChart";

const Dashboard: React.FC = () => {
  const { income, expenses, savings } = useFinanceContext();

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
        <div className="dashboard-chart mt-6">
          <h2 className="text-xl font-bold mb-4">Financial Overview</h2>
          <FinanceChart income={income} expenses={expenses} savings={savings} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
