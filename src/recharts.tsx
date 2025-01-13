import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Income", value: income },
  { name: "Expenses", value: expenses },
  { name: "Savings", value: savings },
];

<BarChart width={300} height={200} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="value" fill="#8884d8" />
</BarChart>;
