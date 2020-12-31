import React from "react";
import classes from "./viewer.module.scss";

interface ViewerProps {
  text: string;
  amount: number;
}
const Index: React.FC<ViewerProps> = ({ text, amount }) => {
  const buttonColor =
    text === "Expense"
      ? { color: "var(--yellow)", backgroundColor: "var(--salmon)" }
      : undefined;
  return (
    <div className={classes.wrapper}>
      <div className={classes.capsule} style={buttonColor}>
        <p>{text}</p>
      </div>
      <p style={{ fontSize: "18px" }}>{amount}</p>
    </div>
  );
};
export default Index;
