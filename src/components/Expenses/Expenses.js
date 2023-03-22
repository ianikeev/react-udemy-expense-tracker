import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const selectExpenseYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear}
                       onSelectExpenseYear={selectExpenseYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />;
      </Card>
    </li>
  );
};

export default Expenses;