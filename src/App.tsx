import "./App.css";
import ExpenseFilter from "./components/expense-tracker/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/ExpenseForm";
import ExpenseList from "./components/expense-tracker/ExpenseList";
import { useState } from "react";

function App() {
  const initialExpenses = [
    { id: 1, description: "Expense 1", amount: 100, category: "Utilities" },
    { id: 2, description: "Expense 2", amount: 200, category: "Utilities" },
    { id: 3, description: "Expense 3", amount: 300, category: "Utilities" },
    { id: 4, description: "Expense 4", amount: 400, category: "Utilities" },
    { id: 5, description: "Expense 5", amount: 68, category: "Groceries" },
    { id: 6, description: "Expense 6", amount: 420, category: "Entertainment" },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visableExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const deleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle w-75">
        <div className="mb-4">
          <ExpenseForm
            onSubmit={(newExpense) =>
              setExpenses([
                ...expenses,
                { ...newExpense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList expenses={visableExpenses} onDelete={deleteExpense} />
      </div>
    </>
  );
}

export default App;
