// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount, balanceAmount} = props
  return (
    <>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon-img"
        />
        <div className="text-container">
          <p className="card-para1">Your Balance</p>
          <p className="card-para2" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon-img"
        />
        <div className="text-container">
          <p className="card-para1">Your Income</p>
          <p className="card-para2" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon-img"
        />
        <div className="text-container">
          <p className="card-para1">Your Expenses</p>
          <p className="card-para2" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
