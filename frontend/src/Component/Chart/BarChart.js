import React from "react";
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'

import { Bar } from "react-chartjs-2";
import { useGlobalContext } from "../../context/global.context";
Chart.register(CategoryScale, LinearScale, BarElement)

const BarChart = () => {
  const { expenses } = useGlobalContext();

  // Sum the total expenses for each category
  const categoryExpenses = {};
  if (expenses.length > 0) {
    expenses.forEach((expense) => {
      const category = expense.category;
      const amount = expense.amount;
      const label = `${category}`;

      if (label in categoryExpenses) {
        categoryExpenses[label] += amount;
      } else {
        categoryExpenses[label] = amount;
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
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;

/* This code defines a React component called BarChart, which displays a bar chart that shows the total expenses for each category. It uses the react-chartjs-2 library to create the bar chart.

The component first retrieves the expenses data from the global context using the useGlobalContext hook. It then calculates the total expenses for each category using a loop that iterates through the expenses data array and adds up the expenses for each category. The resulting categoryExpenses object is used to format the data for the chart.

The chartData object contains the labels for the chart (which are the category names) and the data for each bar (which is the total expense for each category). The backgroundColor property specifies the color for each bar in the chart.

Finally, the component renders the BarChart component, which includes the chart title and the Bar component from react-chartjs-2, passing in the chart data as a prop.*/