const generalReducer = (state, action) => {
    switch(action.type) {
        case 'HANDLE_CHANGE':
            console.log("Am ajuns la actiunea de HANDLE CHANGE " + action);
            return(state);

    }
};

export default generalReducer;