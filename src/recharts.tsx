import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const income = 0; // Example value
const expenses = 0; // Example value
const savings = 0; // Example value

const data = [
  { name: "Income", value: income },
  { name: "Expenses", value: expenses },
  { name: "Savings", value: savings },
];

<BarChart width={100} height={50} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="value" fill="#8884d8" />
</BarChart>;
