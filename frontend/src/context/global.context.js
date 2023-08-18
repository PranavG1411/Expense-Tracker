import React, { useContext, useState, useEffect  } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  //calculate incomes
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        console.log(err);
        // setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    return totalIncome;
  };
  console.log("total", totalIncome());

  // calculate Expense
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}/add-expense`, income)
      .catch((err) => {
        console.log(err);
        // setError(err.response.data.message);
      });
    getExpense();
  };

  const getExpense = async () => {
    const response = await axios.get(`${BASE_URL}get-expense`);
    setExpenses(response.data);
    console.log(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpense();
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };
  console.log("total", totalIncome());

  // Get expenses data for pie chart
  const expensesData = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});


  useEffect(() => {
    getIncomes();
    getExpense();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpense,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
        expensesData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// axios is a popular JavaScript library used for making HTTP requests from a web application. In a React application, you may use axios to fetch data from an API, update data on the server, or perform other types of HTTP requests.

// When a React component is rendered, it may need to fetch data from an API to display dynamic content or interact with a server-side resource. axios allows developers to make such requests easily and handle the resulting data in a structured way.

/*useState([]) is a React hook used to create state in a component, where the initial state value is an empty array []. It is commonly used when you need to store and manipulate a list of items in your component's state, like a to-do list, for example.

The useState hook returns an array with two values: the current state value and a function to update the state value. You can update the state value by calling the update function and passing in a new value.

Overall, useState([]) is a simple way to add state to a React component, specifically for managing a list of items.*/



/* First, the code imports necessary dependencies like React, axios, and the useState and useEffect hooks from the React library. It then creates a constant variable called BASE_URL, which stores the base URL for the API server.

Next, the code creates a context object using React.createContext(), which is used to pass data down the component tree without needing to pass props manually at every level. This context object is then exported as GlobalContext, and a Provider component is created using the context object.

The Provider component wraps around the rest of the app's components and provides access to the context data and functions to any child component that needs it.

Inside the Provider component, the code defines state variables for incomes, expenses, and error using the useState hook. The hook takes in an initial value (in this case, an empty array for incomes and expenses, and null for error), and returns an array with the current value and a function to update the value.

The code then defines several functions to interact with the API server, such as addIncome(), getIncomes(), deleteIncome(), addExpense(), getExpense(), and deleteExpense(). These functions use the axios library to make HTTP requests to the API server, and update the state variables accordingly.

Additionally, the code defines several helper functions like totalIncome(), totalExpenses(), and totalBalance() that calculate the total income, total expenses, and the difference between the two.

The code also defines a function called transactionHistory() that returns the most recent 3 transactions (both income and expense), sorted by the creation date.

Finally, the code defines a custom hook called useGlobalContext() that returns the context object created earlier, allowing any child component to access the state and functions provided by the Provider component.

Overall, this code creates a context provider that allows the app to manage income and expense data, interact with an API server, and provide that data and functionality to child components as needed. It does this by leveraging React hooks, axios, and context objects to keep the app's state and data organized and easily accessible.*/