import React from "react";
import Viewer from "./Viewer/index";
import classes from "./tracker.module.scss";
interface BalanceTrackerProps {
  income: number;
  expense: number;
}
const Index: React.FC<BalanceTrackerProps> = ({ income, expense }) => {
  return (
    <div className={classes.tracker}>
      <Viewer text="Income" amount={income} />
      <Viewer text="Expense" amount={expense} />
    </div>
  );
};
export default Index;
