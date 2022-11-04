import {createStore} from 'redux';

const INITIAL_STATE = {
    amount: 50000,
    kycDone: true,
}

const amountReducer = (state=INITIAL_STATE, action) => {
    if (action.type === 'Spend'){
        return {
            ...state,
            amount: state.amount - action.payload
        }
    }

    if (action.type === 'Receive'){
        return {
            ...state,
            amount: state.amount + action.payload
        }
    }

    return state;
}

const store = createStore(amountReducer)

export default store;