const initialState = {
    //users data from DB
    allCompaniesData: [],
    allJobsData: [],
    jobsDetails: [],
    userDetails: [],
    contactInfo: [],

};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_JOBS':
            console.log('Am ajuns in reducer si am luat toate job-urile');
            return {...state, allJobsData: action.payload};
        case 'EDIT_USER_INFO':
            console.log('Am ajuns in reducer si am editat informatiile utilizatorului');
            return {...state, userDetails: action.payload};
        case 'GET_USER_INFO':
            console.log('Am ajuns in reducer si am luat detaliile utilizatorului');
            return {...state, userDetails: action.payload};
        case 'GET_CONTACT_INFO':
            console.log('Am ajuns in reducer si am luat contact info');
            return {...state, contactInfo: action.payload};
        default:
            return state;
    }
};

export default userReducer;