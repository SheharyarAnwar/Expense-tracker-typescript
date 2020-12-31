import React from "react";
interface BalanceProps {
  balance: number;
}
const Index: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <div>
      <p>Your Balance</p>
      <p style={{ marginTop: "10px" }}>{balance}</p>
    </div>
  );
};
export default Index;
