import React from "react";
import { Pie } from "react-chartjs-2";
import { useGlobalContext } from "../../context/global.context";

const PieChart = () => {
  const { expenses } = useGlobalContext();

  // Sum the total expenses for each category
  const categoryExpenses = {};
  expenses.forEach((expense) => {
    const category = expense.category;
    const amount = expense.amount;
    const date = new Date(expense.date);
    const formattedDate = date.toLocaleDateString();
    const label = `${category} (${formattedDate})`;

    if (label in categoryExpenses) {
      categoryExpenses[label] += amount;
    } else {
      categoryExpenses[label] = amount;
    }
  });

  // Format the data for the chart
  const chartData = {
    labels: Object.keys(categoryExpenses),
    datasets: [
      {
        label: "Expenses by Category",
        data: Object.values(categoryExpenses),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Expenses by Category</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
