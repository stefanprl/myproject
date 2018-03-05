const initialState = {
    //users data from DB
    basicUsersData: [],
    companyUsersData: [],
    adminUsersData: [],
    usersData: [],

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
            console.log('Am creat un utilizator nou!');
            return state;
        case 'UPDATE_USER':
            console.log('Am ajuns in reducer CUMVA', action);
            return { ...state, isLoggedIn: true, loggedInUserInfo: action.payload };
        case 'DELETE_USER':
            console.log('Am ajuns in reducer si am sters utilizatorul');
            return { ...state, error: action.payload };
        case 'RETURN_BASIC_USERS':
            console.log("Am luat utilizatorii normali");
            return { ...state, basicUsersData: action.payload};
        case 'RETURN_COMPANY_USERS':
            console.log("Am luat utilizatorii companie");
            return { ...state, companyUsersData: action.payload};
        case 'RETURN_ADMIN_USERS':
            console.log("Am luat utilizatorii admini");
            return { ...state, adminUsersData: action.payload};
        case 'GET_USER':
            return { ...state, isLoggedIn: null, loggedInUserInfo: null };
        case 'CLEAR_FIELDS':
            return { ...state, isLoggedIn: null, loggedInUserInfo: null };
        default:
            return state;
    }
};

export default adminReducer;