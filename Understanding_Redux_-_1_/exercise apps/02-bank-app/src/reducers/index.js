export default (state, action) => {
    switch (action.type) {
        case 'WITHDRAW_AMOUNT':
            if (state.totalAmount >= action.amount) {
                return {
                    ...state,
                    totalAmount: state.totalAmount - action.amount
                };
            } else {
                return state;
            }
        case 'GIVE_AWAY_EVERYTHING':
            return {
                ...state,
                totalAmount: 0
            }
        default:
            return state;
    }
    
};