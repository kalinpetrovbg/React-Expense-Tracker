import { useState } from 'react'

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  let [title, setTitle] = useState(props.title);

  const updateTitle = () => {
    setTitle('New!!!');
    console.log(title)
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} лв.</div>
      </div>
      <button onClick={updateTitle}>Change title</button>
    </Card>

  );
}

export default ExpenseItem;