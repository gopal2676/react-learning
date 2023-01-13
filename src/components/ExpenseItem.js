import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    console.log("date is", props.expenseDate);


    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.expenseTitle}</h2>
                <div className='expense-item__price'> {props.expenseAmount} </div>
            </div>
        </div>
    );
}
export default ExpenseItem;