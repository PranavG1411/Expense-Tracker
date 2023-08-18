import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useGlobalContext } from "../../context/global.context";

const DonutChart = () => {
  const { expenses } = useGlobalContext();

  // Sum the total expenses for each category
  const categoryExpenses = {};
  if (expenses.length > 0) {
    expenses.forEach((expense) => {
      const category = expense.category;
      const amount = expense.amount;

      if (category in categoryExpenses) {
        categoryExpenses[category] += amount;
      } else {
        categoryExpenses[category] = amount;
      }
    });
  }

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
      <Doughnut data={chartData} />
    </div>
  );
};

export default DonutChart;
