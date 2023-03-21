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
        {props.items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date} />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;