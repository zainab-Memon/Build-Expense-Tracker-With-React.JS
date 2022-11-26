import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // using multiple states---------------------
  const [enteredTitle, setEnteredTitle] = useState(""); //destructuring
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // For Title
  const titleChangeHandler = (event) => {
     setEnteredTitle(event.target.value); //storing the user input in state (using multiple states)
      };
  // For Amount
  const amountChangeHandler = (event) => {
     setEnteredAmount(event.target.value);
     };
  // For Date
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
     };
  const submitHandler = (event) => {
    event.preventDefault(); //The page won't reload now.
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // overwriting the user input once the form submitted to clear the input
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
