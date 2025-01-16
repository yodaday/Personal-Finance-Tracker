import React from "react";
import { useFinanceContext } from "../hooks/hooks";

const TransactionList: React.FC = () => {
  const { transactionHistory, handleDeleteTransaction } = useFinanceContext();

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      {transactionHistory.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactionHistory.map((transaction, index) => (
            <li key={index} className="mb-2 p-2 border-b">
              <span className="font-bold">{transaction.type}: </span>
              <span>${transaction.amount.toFixed(2)}</span> -{" "}
              <span className="italic">{transaction.category}</span>
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
  );
};

export default TransactionList;
