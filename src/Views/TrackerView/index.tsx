import React, { useContext } from "react";
import Balance from "../../Components/Balance";
import Tracker from "../../Components/BalanceTracker/index";
import Container from "../../Components/Container/index";
import { globalContext } from "../../Context/viewSwitcher";
import { GlobalCTX } from "../../Types";
//import Main from "../../Layouts/Main/index";
interface Props {
  layout: React.FC;
}
const Index: React.FC<Props> = ({ layout }) => {
  const { state, view } = useContext(globalContext) as GlobalCTX;
  const { balance, income, expense } = state;
  // const { income, balance, expense } = useSelector(
  //   (state) => state.expenseReducer
  // );
  const Layout = layout;
  return (
    <>
      <Layout>
        <Balance balance={balance} />
        <Tracker income={income} expense={expense} />
        <Container />
      </Layout>
    </>
  );
};
export default Index;
