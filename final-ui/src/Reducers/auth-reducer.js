const initialState = {
    loggedInUserInfo: [],
    isLogged: false,
    error: null,

    //states used when a basic user registers on the platform
    value: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    showPassword: false,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_LOGIN_SUCCESS':
            console.log('Am ajuns in reducer SUCCESS', action);
            return { ...state, isLogged: true, loggedInUserInfo: action.payload };
        case 'ON_LOGIN_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };
        case 'ON_REGISTER':
            return { ...state, isLogged: null, loggedInUserInfo: null };
        default:
            return state;
    }
};

export default authReducer;