import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { rupees, expenses } from "../../utils/icon";
import { useGlobalContext } from "../../context/global.context";
import Chart from "../../Component/Chart/Chart.js";
import History from "../History/history";

function Dashboard() {
  const {
    totalExpenses,
    totalIncome,
    totalBalance,
    transactionHistory,
    getIncomes,
    getExpense,
    incomes,
    expenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpense();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {rupees} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {rupees} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {rupees} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-items">
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-items">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3.5rem;
            font-weight: 700;
          }
        }
        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 4.5rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;

/* This is a React functional component called "Dashboard". It imports several dependencies such as styled-components, InnerLayout, and two icons "rupees" and "expenses" from the "utils" folder. It also imports "useGlobalContext" from the global context, "Chart" and "History" components.

The component renders a dashboard that displays various transaction-related data. The useEffect hook is used to call the "getIncomes" and "getExpense" functions from the context when the component mounts.

The component has two main sections, "stats-con" and "history-con", both of which are displayed using CSS Grid. The "stats-con" section includes a "Chart" component and three divs displaying "Total Income", "Total Expenses" and "Total Balance" respectively. The "history-con" section includes a "History" component, two sections displaying "Min Salary" and "Max Salary" respectively, and two sections displaying "Min Expense" and "Max Expense" respectively.

The component uses the "totalIncome()", "totalExpenses()", and "totalBalance()" functions to calculate and display the total income, expenses, and balance respectively. The "Math.min()" and "Math.max()" functions are used to calculate and display the minimum and maximum income and expense amounts respectively.

The CSS styles are defined using styled-components and include grid layout and various styling for the divs and sections. */