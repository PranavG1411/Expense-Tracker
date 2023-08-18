import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global.context";
import { InnerLayout } from "../../styles/Layout";
import Form from "../Form/Form";
import IncomeItem from "../../Component/IncomeItems/IncomeItem";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
  const { addIncome, expenses, getExpense, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpense();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expense: <span>₹{totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((incomes) => {
              const { _id, title, amount, date, category, description, type } =
                incomes;
              console.log(incomes);
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;


/* This is a React functional component called Expenses. It imports various dependencies such as React, styled-components, useGlobalContext, InnerLayout, Form, IncomeItem, and ExpenseForm. It exports the Expenses component as the default export.

Within the Expenses function, it calls the useGlobalContext hook, which provides access to the global state and actions of the application. It also calls the useEffect hook to fetch the expenses data when the component mounts.

The Expenses component returns a styled div with a class name of ExpenseStyled that contains a header with the text "Expenses". It also contains a section with a class name of income-content, which is further divided into two sections. The first section is a div with a class name of form-container, which contains the ExpenseForm component. The second section is a div with a class name of incomes, which contains a list of IncomeItem components rendered with data from the expenses array.

The totalExpenses function is called to calculate the total amount of expenses and displayed as a separate header with the text "Total Expense". It uses a span element with a class name of total-income to display the total amount in a large font size and green color.

The ExpenseStyled constant is a styled div with CSS styles for the various elements within the Expenses component.




 */
