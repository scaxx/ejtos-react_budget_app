import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    

    useEffect(() => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }, [newBudget, dispatch]);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);

        if (value > 20000) {
            alert('Budget cannot exceed £20,000');
            return;
        }

        if (value < totalExpenses) {
            alert(`Budget cannot be less than total allocated spending: £${totalExpenses}`);
            return;
        }

        setNewBudget(value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: </span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
                max={20000}
            />
        </div>
    );
};

export default Budget;
