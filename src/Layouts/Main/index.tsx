import React from "react";
import Header from "../../Components/Header";
import classes from "./main.module.scss";

const Index: React.FC = ({ children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Header />
        <div className={classes.subContainer}>
          <div className={classes.view}>
            <div className={classes.viewWrapper}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
