import styled from "styled-components";
import { Bet } from "./Bet";

export const Dashboard = () => {
  const Toolbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30vh;
    background-color: lightgrey;
  `;

  const Bets = styled.div`
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  return (
    <div className="page">
      <Toolbar>
        <button className="">Predict</button>
      </Toolbar>
      <Bets>
        <Bet />
        <Bet />
        <Bet />
        <Bet />
      </Bets>
    </div>
  );
};
