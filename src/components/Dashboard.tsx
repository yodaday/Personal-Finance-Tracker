import React from "react";
import Income from "./Income";
import TransactionList from "./TransactionList";
import { useFinanceContext } from "../hooks/hooks";
import FinanceChart from "./FinanceChart";

const Dashboard: React.FC = () => {
  const { income, expenses, savings } = useFinanceContext();

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
          </div>
          <div className="p-4 bg-red-200 rounded-lg shadow-md">
            <h3 className="font-semibold">Expenses</h3>
            <p>${expenses}</p>
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
