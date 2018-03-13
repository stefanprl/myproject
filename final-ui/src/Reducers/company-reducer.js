const initialState = {
    //users data from DB
    companiesData: [],
    jobsData: [],

};

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_COMPANY':
            console.log('Am ajuns in reducer si am creat o companie noua');
            return { ...state };
        case 'DELETE_COMPANY':
            console.log('Am ajuns in reducer si am sters compania');
            return {...state};
        case 'EDIT_COMPANY':
            console.log('Am ajuns in reducer si am editat compania');
            return {...state};
        case 'GET_COMPANIES':
            console.log('Am ajuns in reducer si am afisat companiile');
            return { ...state, companiesData: action.payload };
        case 'CREATE_JOB':
            console.log('Am ajuns in reducer si am creat job-ul');
            return {...state};
        case 'GET_JOBS':
            console.log('Am ajuns in reducer si am luat job-urile');
            return {...state, jobsData: action.payload};
        case 'DELETE_JOB':
            console.log('Am ajuns in reducer si am sters job-ul');
            return {...state};
        default:
            return state;
    }
};

export default companyReducer;