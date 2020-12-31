import React, { useEffect } from "react";
import classes from "./actions.module.scss";
import { gsap } from "gsap";
import { ReactComponent as HistoryIcon } from "../../Assets/History.svg";
import { ReactComponent as AddIcon } from "../../Assets/Add.svg";
import { GlobalCTX } from "../../Types/index";
interface ActionProps {
  setVariant: GlobalCTX["view"]["setVariant"];
}

const Index: React.FC<ActionProps> = ({ setVariant }) => {
  const addRef = React.createRef<HTMLSpanElement>();
  const addIconClicked = () => {
    setVariant("expense-modal");
  };
  useEffect(() => {
    var tl = gsap.timeline({ yoyo: true, repeat: -1 });
    tl.to(addRef.current, {
      scale: 1.4,
      duration: 1.5,
    });
    tl.play();
  });
  const historyPressedAction = () => {
    setVariant("history");
  };
  return (
    <>
      <div className={classes.history}>
        <HistoryIcon onClick={historyPressedAction} width={22} />
      </div>
      <div className={classes.animationWrapper}>
        <div className={classes.add} onClick={addIconClicked}>
          <AddIcon width={15} />
        </div>
        <span ref={addRef} className={classes.pulsar} />
      </div>
    </>
  );
};
export default Index;
