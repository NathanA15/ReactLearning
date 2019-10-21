import React from 'react';
import { store } from './store';
import { withdrawAmount } from './actions';

const ButtonGroup = ({ amounts }) => (
    <div className='App__buttons'>
        {amounts.map((amount, i) => (
            <button
                data-amount={amount}
                key={`btn-${i}`}
                onClick={dispatchWithdraw}
            >
                WITHDRAW ${amount}
            </button>
        ))}
    </div>
)

function dispatchWithdraw(e) {
    const amount = e.target.dataset.amount;
    store.dispatch(withdrawAmount(amount));
}

export default ButtonGroup;