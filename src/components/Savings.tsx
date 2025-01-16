import React from "react";
import { useSavings } from "../hooks/hooks";

const Savings: React.FC = () => {
  const { savings } = useSavings();

  return (
    <div className="p-4 bg-yellow-200 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Savings</h2>
      <p className="text-xl font-bold">{`$${savings}`}</p>
    </div>
  );
};

export default Savings;
