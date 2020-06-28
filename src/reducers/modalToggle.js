const modalToggleReducer = (state = false, action) => {
    switch(action.type){
        case 'MODALOPEN':
            return true;
        case 'MODALCLOSE':
            return false;
        default:
            return state;
    }
};

export default modalToggleReducer;