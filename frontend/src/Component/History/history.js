import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global.context";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2> Recent History </h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense"
                ? `-${amount < 0 ? 0 : amount}`
                : `+${amount < 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: ##fcf6f9;
    border: 2px solid ##ffffff;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: centre;
  }
`;

export default History;


/* This is a React functional component that renders a history of recent transactions. It imports the useGlobalContext hook from ../../context/global.context, which is used to access the transactionHistory array in the global context.

The history array is created using the spread operator to copy all the elements of transactionHistory array, which makes it easier to work with.

In the return statement, a div with class name HistoryStyled is created, which contains a heading and a map function that iterates over the history array and creates a new div with class name history-item for each transaction. The transaction's title and amount are displayed in this div using p elements, with the amount being displayed in red if the type of the transaction is "expense", and in green otherwise.

Finally, the component is exported with the default keyword.*/