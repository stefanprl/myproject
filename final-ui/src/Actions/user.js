import request from "../Config/request";

export const getAllJobs = () => {

    return(dispatch) => {
        request.get("/jobs")
            .then((response) => {
                let availableJobs = [];
                for(let i=0; i<response.data.length; i++){
                    if(response.data[i].isAvailable){
                        availableJobs.push(response.data[i])
                    }
                }

                dispatch(getJobs(availableJobs));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};


export const getJobs = (payload) => {
    return { type: "GET_ALL_JOBS", payload}
};


export const editUserInfo = (id, values, userInfo) => {
    return(dispatch) => {
        request.put("/users/" + id, {
            firstName: values.firstName,
            lastName: values.lastName,
            contactInfo: values.contactInfo
        })
            .then((response) => {
                    dispatch(editUser);
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const editUser = (payload) => {
    return { type: "EDIT_USER_INFO", payload}
};


export const getUserInfo = (id) => {
    return(dispatch) => {
        request.get("/users/" + id)
            .then((response) => {
                dispatch(getInfo(response.data));
                //
                // let x = response.data;
                // getContactInfo((id));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const getInfo = (payload) => {
    return { type: "GET_USER_INFO", payload}
};

export const getContactInfo = (id) => {
    return(dispatch) => {
        request.get("/contacts/" + id)
            .then((response) => {
                dispatch(getContact(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const getContact = (payload) => {
    return { type: "GET_CONTACT_INFO", payload}
};