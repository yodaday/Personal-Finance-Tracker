import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

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
        label: "Amount ($)",
        data: [income, expenses, savings],
        backgroundColor: ["#4caf50", "#f44336", "#ffeb3b"], 
        borderColor: ["#388e3c", "#d32f2f", "#fbc02d"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "500px", height: "250px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FinanceChart;
