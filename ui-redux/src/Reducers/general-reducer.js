const initialState = {
    loggedInUserInfo: null,
    isLoggedIn: null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_LOGIN_INIT':
            console.log('Am ajuns in reducer');
            return state;
        case 'ON_LOGIN_SUCCESS':
            console.log('Am ajuns in reducer SUCCESS', action);
            return { ...state, isLoggedIn: true, loggedInUserInfo: action.payload };
        case 'ON_LOGIN_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };
        case 'ON_LOGOUT':
            return { ...state, isLoggedIn: null, loggedInUserInfo: null };
        default:
            return state;
    }
};

export default reducer;