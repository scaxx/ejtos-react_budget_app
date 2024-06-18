import React, { useContext } from 'react';
import { TiDelete, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><TiPlus size='3em' onClick={() => increaseAllocation(props.name)} style={{ cursor: 'pointer', color: 'white', backgroundColor: 'green', borderRadius: '50%', padding: '5px', }}></TiPlus></td>
            <td><TiDelete size='3em' onClick={handleDeleteExpense} style={{ cursor: 'pointer', color: 'white', backgroundColor: 'red', borderRadius: '50%', padding: '5px', }}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
