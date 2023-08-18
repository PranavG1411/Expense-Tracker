import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.jpg";
import { MainLayout } from "./styles/Layout";
import Orb from "./Component/Orb/Orb";
import Navigation from "./Component/Navigation/Navigation";
import Dashboard from "./Component/Dashboard/Dashboard";
import Income from "./Component/Incomes/Income";
import Expenses from "./Component/Expenses/Expenses";
import { useGlobalContext } from "./context/global.context";
import ViewTransaction from "./Component/View Trancation/View-trancation";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <ViewTransaction />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
export default App;


/* This is a React functional component named App. It imports several components such as Orb, Navigation, Dashboard, Income, Expenses and ViewTransaction. It also imports a styled component AppStyled and an image bg from the img folder.

In the function, it declares a state variable active using the useState hook which is initialized to 1. It also initializes a context variable global using the useGlobalContext hook, and logs it to the console.

The displayData function uses a switch statement to determine which component to display based on the value of the active state variable.

The orbMemo variable uses the useMemo hook to memoize the Orb component, preventing unnecessary re-renders.

Finally, the component returns a div with a styled component AppStyled as its outermost element. It includes an image as the background using the bg prop. It also includes the Orb component, the Navigation component, and the displayData function which returns one of the components based on the value of the active state variable.*/