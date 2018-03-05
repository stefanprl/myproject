const initialState = {
    //users data from DB
    companiesData: [],

};

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_COMPANY':
            console.log('Am ajuns in reducer si am creat o companie noua');
            return { ...state };
        case 'GET_COMPANIES':
            console.log('Am ajuns in reducer si am afisat companiile');
            return { ...state, companiesData: action.payload };
        default:
            return state;
    }
};

export default companyReducer;