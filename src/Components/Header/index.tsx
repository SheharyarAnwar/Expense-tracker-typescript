import React from "react";
import classes from "./header.module.scss";

const Index: React.FC = () => {
  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>Expense Tracker</h2>
    </div>
  );
};

export default Index;
