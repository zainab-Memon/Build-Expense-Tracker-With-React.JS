import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //filtering data according to year
  });
   return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} //passing selected year
          onChangeFilter={filterChangeHandler}
        />
        {/* rendering chart */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
