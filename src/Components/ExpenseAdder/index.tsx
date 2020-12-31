import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  createRef,
} from "react";
import classes from "./index.module.scss";
import { ReactComponent as AddIcon } from "../../Assets/Add.svg";
import { globalContext } from "../../Context/viewSwitcher";
import { GlobalCTX } from "../../Types";

const Index: React.FC = () => {
  const { state, view } = useContext(globalContext) as GlobalCTX;
  const { setVariant } = view;
  const { addTransaction } = state;
  const ref = createRef<HTMLDivElement>();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const addNewTransaction = () => {
    var regex = /^-?(0|[1-9]\d*)(\.\d+)?$/;
    if (!regex.test(amount)) {
      return;
    }
    addTransaction({ description, amount: parseInt(amount) });
    setVariant("actions");
  };
  const handleClickOutside = (
    event: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setVariant("actions");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={classes.overlay} onClick={handleClickOutside}>
      <div className={classes.modal} ref={ref}>
        <div className={classes.modalContainer}>
          <p>Add Transaction</p>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount (+/- Numbers Only)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={classes.button} onClick={addNewTransaction}>
          <AddIcon width={15} />
        </div>
      </div>
    </div>
  );
};
export default Index;
