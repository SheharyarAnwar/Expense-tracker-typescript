export interface GlobalCTX {
  view: ViewContext;
  state: StateContext;
}
export interface ExpenseTrackerState {
  balance: number;
  transactionHistory: Array<any>;
  income: number;
  expense: number;
}

export interface StateContext extends ExpenseTrackerState {
  addTransaction: (payload: AddTransactionPayload) => void;
  removeTransaction: (payload: RemoveTransactionPayload) => void;
}
export interface AddTransactionPayload {
  description: string;
  amount: number;
}
export interface RemoveTransactionPayload {
  itemNumber: number;
}
export type Action =
  | {
      type: "ADD_TRANSACTION";
      payload: AddTransactionPayload;
    }
  | { type: "REMOVE_TRANSACTION"; payload: RemoveTransactionPayload };

export type ViewSwitchActions = "expense-modal" | "history" | "actions";
export interface ViewContext {
  variant: ViewSwitchActions;
  setVariant: React.Dispatch<React.SetStateAction<ViewSwitchActions>>;
}
