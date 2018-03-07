const initialState = {
    //users data from DB
    allCompaniesData: [],
    allJobsData: [],
    jobsDetails: [],

};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_JOBS':
            console.log('Am ajuns in reducer si am luat toate job-urile');
            return {...state, allJobsData: action.payload};
        default:
            return state;
    }
};

export default userReducer;