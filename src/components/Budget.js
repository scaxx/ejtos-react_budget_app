import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);

        if (isNaN(value)) {
            alert('Please enter a valid number.');
            return;
        }

        if (value > 20000) {
            alert('Budget cannot exceed £20,000');
            return;
        }

        if (value < totalExpenses) {
            alert(`Budget cannot be less than total allocated spending: ${currency}${totalExpenses}`);
            return;
        }

        setNewBudget(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
                max={20000}
            />
            <select value={currency} onChange={handleCurrencyChange} style={{ height: '30px', marginLeft: '4px' }}>
                <option value="$">$</option>
                <option value="£">£</option>
                <option value="€">€</option>
                <option value="₹">₹</option>
            </select>
        </div>
    );
};

export default Budget;
