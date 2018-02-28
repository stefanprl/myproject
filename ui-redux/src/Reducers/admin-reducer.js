const initialState = {
    //users data from DB
    basicUsersData: [],
    companyUsersData: [],
    adminUsersData: [],

    //states used when an admin creates a new user
    selectedFirstName: '',
    selectedRole: '',
    selectedUsername: '',
    selectedLastName: '',
    selectedPassword: '',

    //states used when an admin updates a user
    editedUsername: '',
    editedFName: '',
    editedLName: '',

    //states used to populate fields of a soon-to-be-edited user
    defaultUsername: '',
    defaultFName: '',
    defaultLName: '',

};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log('Am ajuns in reducer');
            return state;
        case 'UPDATE_USER':
            console.log('Am ajuns in reducer CUMVA', action);
            return { ...state, isLoggedIn: true, loggedInUserInfo: action.payload };
        case 'DELETE_USER':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };
        case 'GET_USERS':
            return { ...state};
        case 'GET_USER':
            return { ...state, isLoggedIn: null, loggedInUserInfo: null };
        case 'CLEAR_FIELDS':
            return { ...state, isLoggedIn: null, loggedInUserInfo: null };
        default:
            return state;
    }
};

export default adminReducer;