import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filterByYear = (filterValue) => {
    setFilteredYear(filterValue);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterByYear} />

      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
};
export default ExpensesList;
