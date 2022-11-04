import {createStore} from 'redux';

const INITIAL_STATE = {
    amount: 50000,
}

const amountReducer = (state=INITIAL_STATE, action) => {
    if (action.type === 'Spend'){
        return {
            ...state,
            amount: state.amount - Number(action.payload)
        }
    }

    if (action.type === 'Receive'){
        return {
            ...state,
            amount: state.amount + Number(action.payload)
        }
    }

    return state;
}

const store = createStore(amountReducer)

export default store;