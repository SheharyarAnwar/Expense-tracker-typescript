import React, { useContext } from "react";
import classes from "./container.module.scss";
import Actions from "../Actions/index";
import History from "../History/index";
import ExpenseAdder from "../ExpenseAdder/index";
import { globalContext } from "../../Context/viewSwitcher";
import { GlobalCTX } from "../../Types";
const Index: React.FC = () => {
  const { state, view } = useContext(globalContext) as GlobalCTX;

  return (
    <div className={classes.container}>
      {view.variant === "actions" ? (
        <Actions setVariant={view.setVariant} />
      ) : view.variant === "history" ? (
        <History />
      ) : view.variant === "expense-modal" ? (
        <ExpenseAdder />
      ) : null}
    </div>
  );
};

export default Index;
