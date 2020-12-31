import React, { useContext, useState } from "react";
import HistoryItem from "./HistoryItem/index";
import { ReactComponent as ArrowIcon } from "../../Assets/Arrow.svg";

import classes from "./index.module.scss";
import { GlobalCTX } from "../../Types";
import { globalContext } from "../../Context/viewSwitcher";
const Index: React.FC = () => {
  const { state, view } = useContext(globalContext) as GlobalCTX;
  const { setVariant } = view;
  const { removeTransaction, transactionHistory } = state;
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const backHandler = () => {
    setVariant("actions");
  };
  const deleteItem = (val: number) => {
    console.log("delete Pressed for", val);
    removeTransaction({ itemNumber: val });
  };
  const activateItem = (val: number) => {
    setActiveItem(val);
  };
  const items = transactionHistory.map((val, index) => {
    return (
      <HistoryItem
        description={val.description}
        key={index}
        active={index === activeItem}
        activateItem={() => activateItem(index)}
        onDeletePressed={() => deleteItem(index)}
        amount={val.amount}
      />
    );
  });
  return (
    <div className={classes.container}>
      <p>History</p>
      <div className={classes.icon} onClick={backHandler}>
        <ArrowIcon width={10} />
        <p>Back</p>
      </div>
      <div className={classes.scrollableWrapper}>
        {items.length > 0 ? (
          [...items]
        ) : (
          <p style={{ marginTop: "20%", color: "var(--red)" }}>
            No Items To Show
          </p>
        )}
      </div>
    </div>
  );
};
export default Index;
