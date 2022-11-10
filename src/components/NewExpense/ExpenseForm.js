import { useState } from 'react';

import './ExpenseForm.css'


const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState('');
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState('');
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amout: enteredAmount,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return <form onSubmit={sumbitHandler}>
    <div className="new-expense__controls">
      <div className='new-expense__control'>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>

      <div className='new-expense__control'>
        <label>Amount</label>
        <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
      </div>

      <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2022-01-01" max="2022-12-31" />
      </div>

    </div>

    <div className='new-expense__actions'>
      <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;