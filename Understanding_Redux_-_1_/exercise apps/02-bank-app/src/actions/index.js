export function withdrawAmount(amount) {
    return {
        type: 'WITHDRAW_AMOUNT',
        amount: amount
    }
};

export function giveAwayEverything() {
    return {
        type: 'GIVE_AWAY_EVERYTHING'
    }
};