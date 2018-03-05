import request from "../Config/request";

export const getMyCompanies = (id) => {

    return(dispatch) => {
        request.get("/companies/user/" + id)
            .then((response) => {
                console.log(response);
                dispatch(getCompanies(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const createCompany = (values) => {
    return(dispatch) => {
        request.post('/companies', {
            name : values.name,
            userId : values.userId,

        })
            .then((response) => {
                dispatch(createdCompany());

            })
            .catch((error) => {
                console.log(error);
            });

    }
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

export const getMyJobs = (value) => {

    return(dispatch) => {
        request.get("/jobs")
            .then((response) => {

            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const createdCompany = () => {
    return {type: "CREATE_COMPANY" };
};

export const getCompanies = (payload) => {
    return {type: "GET_COMPANIES", payload };
};

