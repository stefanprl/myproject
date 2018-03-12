import request from "../Config/request";

export const getMyCompanies = (id) => {

    return(dispatch) => {
        request.get("/companies/user/" + id)
            .then((response) => {
                dispatch(getCompanies(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const createCompany = (values, userId) => {
    return(dispatch) => {
        request.post('/companies', {
            name : values.name,
            userId : values.userId,

        })
            .then((response) => {
                dispatch(createdCompany());
                dispatch(getMyCompanies(userId))
            })
            .catch((error) => {
                console.log(error);
            });

    }
};

export const deleteCompany = (id, userId) => {
    return (dispatch) => {

        request.delete('/companies/' + id, {})
            .then((response) => {
                console.log("Company " + id + " deleted successfully!");
                dispatch(companyDeleted());
                dispatch(getMyCompanies(userId))



            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const editCompany = (id, values, userId) => {
    return (dispatch) => {

        request.put('/companies/' + id, {
            name : values,
        })
            .then((response) => {
                console.log("Company " + id + " edited successfully!");
                dispatch(companyEdited());
                dispatch(getMyCompanies(userId))



            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const createJob = (values) => {
    return(dispatch) => {
        request.post('/jobs', {

        })
            .then((response) => {

            })
            .catch((error) => {
                console.log(error);
            });

    }
};

// const MOCK_JOB = {
//     name: 'New Job',
//     description: 'xxxx',
//     isAvailable: false,
//     jobBenefitList: [
//         {
//             name: 'Open space ....'
//         },
//         {
//             name: 'Attractove salary'
//         }
//     ],
//     jobRequirementsList: [
//         {
//             name: 'Open space ....'
//         },
//         {
//             name: 'Attractove salary'
//         }
//     ],
// };
//
// export const createJob2 = (MOCK_JOB) => {
//     return async (dispatch) => {
//         try {
//            const response =  await request.post('/jobs', MOCK_JOB);
//
//            const jobId = response.data.id;
//
//            for (let benefit of MOCK_JOB.jobBenefitList) {
//                benefit.jobId = jobId;
//
//                await request.post('/jobbenefits', benefit);
//            }
//
//             for (let requirement of MOCK_JOB.jobRequirementsList) {
//                 requirement.jobId = jobId;
//
//                 await request.post('/jobrequirement', benefit);
//             }
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }
// };

export const getMyJobs = (value) => {

    return(dispatch) => {
        request.get("/jobs", {
        })
            .then((response) => {
                let myJobs = [];
                for(let i=0; i<response.data.length; i++){
                    if (response.data[i].companyId === value)
                        myJobs.push(response.data[i]);
                }
                dispatch(getJobs(myJobs));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const createdCompany = () => {
    return { type: "CREATE_COMPANY" };
};

export const getCompanies = (payload) => {
    return { type: "GET_COMPANIES", payload };
};

export const companyDeleted = () => {
    return { type: "DELETE_COMPANY" }
};

export const companyEdited = () => {
    return { type: "EDIT_COMPANY" }
};

export const jobCreated = () => {
    return { type: "CREATE_JOB" };
};

export const getJobs = (payload) => {
    return { type: "GET_JOBS", payload};
};

