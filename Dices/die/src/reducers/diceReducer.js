const initialState = {
    sum: 0,
    dieNumber: null,
};

const diceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CLICK':
            let x = Math.floor((Math.random() * 6) + 1);
            console.log(state.sum);
            console.log(state.dieNumber);
            return Object.assign({}, state, {
                sum: state.sum + x,
                dieNumber: x,

            });
        default:
            return state;
    }
};

export default diceReducer;