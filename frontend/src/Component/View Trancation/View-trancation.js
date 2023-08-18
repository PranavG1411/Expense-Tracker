import React, { useEffect,useState  } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { rupees, expenses } from "../../utils/icon";
import { useGlobalContext } from "../../context/global.context";
import History from "../History/history";
import PieChart from "../Chart/PieChart";
import BarChart from "../Chart/BarChart";
import DonutChart from "../Chart/DonutChart";


const CHART_TYPES = ["pie", "bar", "donut"];


function ViewTransaction() {
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

  const [activeChartIndex, setActiveChartIndex] = useState(0);

  const handleNextClick = () => {
    setActiveChartIndex((activeChartIndex + 1) % CHART_TYPES.length);
  };

  const activeChartType = CHART_TYPES[activeChartIndex];

  useEffect(() => {
    getIncomes();
    getExpense();
  }, []);

  return (
    <ViewTransactionStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
        <div className="chart-nav">
            {CHART_TYPES.map((chartType, index) => (
              <button
                key={chartType}
                className={activeChartIndex === index ? "active" : ""}
                onClick={() => setActiveChartIndex(index)}
              >
                {chartType} Chart
              </button>
            ))}
          </div>
          <div className="chart-con">
          {CHART_TYPES.map((chartType, index) => (
              <div
                key={chartType}
                className={`chart-item ${
                  activeChartType === chartType ? "active" : ""
                }`}
              >
                {chartType === "pie" && <PieChart />}
                {chartType === "bar" && <BarChart />}
                {chartType === "donut" && <DonutChart />}
              </div>
            ))}
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
    </ViewTransactionStyled>
  );
}

const ViewTransactionStyled = styled.div`
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

export default ViewTransaction;