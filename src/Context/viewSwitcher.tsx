import React, { createContext, useReducer, useState } from "react";

import {
  Action,
  AddTransactionPayload,
  ExpenseTrackerState,
  GlobalCTX,
  StateContext,
  ViewContext,
  ViewSwitchActions,
  RemoveTransactionPayload,
} from "../Types/index";
const initialState: ExpenseTrackerState = {
  balance: 0,
  transactionHistory: [],
  income: 0,
  expense: 0,
};

const reducer = (state: ExpenseTrackerState, action: Action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const stateCopy = { ...state };
      const { amount } = action.payload;
      stateCopy.balance += amount;
      if (amount < 0) {
        stateCopy.expense += Math.abs(amount);
      } else {
        stateCopy.income += Math.abs(amount);
      }
      stateCopy.transactionHistory.unshift(action.payload);
      return { ...state, ...stateCopy };

    case "REMOVE_TRANSACTION":
      const newState = { ...state };
      const arr = newState.transactionHistory.filter(
        (val, index) => index !== action.payload.itemNumber
      );
      newState.transactionHistory = arr;
      return { ...state, ...newState };
    default:
      return state;
  }
};

export const globalContext = createContext<GlobalCTX | null>(null);
const { Provider } = globalContext;

const GlobalContextWrapper: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<
    (state: ExpenseTrackerState, action: Action) => ExpenseTrackerState
  >(reducer, initialState);
  const [variant, setVariant] = useState<ViewSwitchActions>("actions");
  const addTransaction = (paylaod: AddTransactionPayload) => {
    return dispatch({ type: "ADD_TRANSACTION", payload: paylaod });
  };
  const removeTransaction = (payload: RemoveTransactionPayload) => {
    return dispatch({ type: "REMOVE_TRANSACTION", payload: payload });
  };
  const viewContext: ViewContext = { variant, setVariant };
  const stateContext: StateContext = {
    ...state,
    addTransaction,
    removeTransaction,
  };
  const globalContext: GlobalCTX = { view: viewContext, state: stateContext };

  return <Provider value={globalContext}>{children}</Provider>;
};

export default GlobalContextWrapper;
