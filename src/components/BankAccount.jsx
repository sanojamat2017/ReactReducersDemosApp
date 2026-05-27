import React, { useReducer } from "react";

const initialState = {
  balance: 0
};

function reducer(state, action) {

  switch(action.type) {

    case "DEPOSIT":
      return {
        balance: state.balance + action.payload
      };
    case "WITHDRAW":
      return {
        balance: state.balance - action.payload
      };
    case "RESET":
      return {
        balance: 0
      };
    default:
      return state;
  }
}

function BankAccount() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>Bank Account Reducer</h1>
      <h2>Balance : ₹{state.balance}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "DEPOSIT",
            payload: 100
          })
        }
      >
        Deposit ₹100
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "WITHDRAW",
            payload: 50
          })
        }
      >
        Withdraw ₹50
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "RESET"
          })
        }
      >
        Reset
      </button>

    </div>
  );
}

export default BankAccount;