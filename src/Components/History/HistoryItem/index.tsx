import React, { createRef, useRef } from "react";
import { ReactComponent as TrashIcon } from "../../../Assets/Trash.svg";
import classes from "./index.module.scss";
interface HistoryItemProps {
  description: string;
  amount: number;
  activateItem: () => void;
  active: boolean;
  onDeletePressed: () => void;
}
const Index: React.FC<HistoryItemProps> = ({
  description,
  amount,
  activateItem,
  active,
  onDeletePressed,
}) => {
  //const [active, setactive] = useState(false);
  const ref = createRef<HTMLDivElement>();
  const activeStyle = {
    backgroundColor: "var(--yellow)",
  };

  return (
    <div className={classes.container} ref={ref} onMouseOver={activateItem}>
      {active ? <TrashIcon width={18} onClick={onDeletePressed} /> : <div />}
      <div className={classes.wrapper} style={active ? activeStyle : undefined}>
        <p>{description}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
};
export default Index;
