import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const selectExpenseYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear}
                       onSelectExpenseYear={selectExpenseYearHandler} />
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date} />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;