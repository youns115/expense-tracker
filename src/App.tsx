import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const initialExpenses = [
    { id: 1, description: "Expense 1", amount: 100, category: "Category 1" },
    { id: 2, description: "Expense 2", amount: 200, category: "Category 2" },
    { id: 3, description: "Expense 3", amount: 300, category: "Category 3" },
    { id: 4, description: "Expense 4", amount: 400, category: "Category 4" },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const deleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </>
  );
}

export default App;
