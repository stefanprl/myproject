const initialState = {
    //users data from DB
    allCompaniesData: [],
    allJobsData: [],
    jobsDetails: [],
    userDetails: [],
    contactInfo: [],
    userEducation: [],
    userWorkExperiences: [],
    userSkills: [],

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
        case 'GET_USER_EDUCATIONS':
            console.log('Am ajuns in reducer si am luat educatia utilizatorului.');
            return {...state, userEducation: action.payload};
        case 'ADD_USER_EDUCATION':
            console.log('Am ajuns in reducer si am creat o noua educatie utilizatorului.');
            return {...state };
        case 'UPDATE_USER_EDUCATION':
            console.log('Am ajuns in reducer si am creat actualizat educatia utilizatorului.');
            return {...state };
        case 'DELETE_USER_EDUCATION':
            console.log('Am ajuns in reducer si am sters educatia utilizatorului.');
            return {...state };
        case 'GET_USER_WORK_EXPERIENCES':
            console.log('Am ajuns in reducer si am luat educatia utilizatorului.');
            return {...state, userWorkExperiences: action.payload};
        case 'ADD_USER_WORK_EXPERIENCE':
            console.log('Am ajuns in reducer si am creat o noua educatie utilizatorului.');
            return {...state };
        case 'DELETE_USER_WORK_EXPERIENCE':
            console.log('Am ajuns in reducer si am creat actualizat educatia utilizatorului.');
            return {...state };
        case 'UPDATE_USER_WORK_EXPERIENCE':
            console.log('Am ajuns in reducer si am sters educatia utilizatorului.');
            return {...state };
        case 'GET_USER_SKILLS':
            console.log('Am ajuns in reducer si am luat educatia utilizatorului.');
            return {...state, userSkills: action.payload};
        default:
            return state;
    }
};

export default userReducer;