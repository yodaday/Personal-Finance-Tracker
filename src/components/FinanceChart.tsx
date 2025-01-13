import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface FinanceChartProps {
  income: number;
  expenses: number;
  savings: number;
}

const FinanceChart: React.FC<FinanceChartProps> = ({
  income,
  expenses,
  savings,
}) => {
  const data = {
    labels: ["Income", "Expenses", "Savings"],
    datasets: [
      {
        label: "Financial Overview",
        data: [income, expenses, savings],
        backgroundColor: ["#4CAF50", "#F44336", "#FFC107"], // Colors for Income, Expenses, Savings
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            return `$${value}`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default FinanceChart;
