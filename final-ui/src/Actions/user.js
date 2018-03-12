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

//CV info - USER EDUCATION CRUD

export const getUserEducations = (userId) => {

    return(dispatch) => {
        request.get("/usereducations/user/"+userId)
            .then((response) => {
                console.log(response.data);
                dispatch(getEducations(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};


export const addUserEducation = (values, userId) => {

    return(dispatch) => {
        request.post("/usereducations", {
            userId: userId,
            institution: values.institution,
            description: values.description,
            startDate: values.startDate,
            endDate: values.endDate,
        })
            .then((response) => {

                dispatch(addEducation());
                dispatch(getUserEducations(userId));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const updateUserEducation = (values, userId) => {
        console.log(values);
        console.log(userId);
    return(dispatch) => {
        debugger;
        request.put("/usereducations/" + values.id, {
            userId: userId,
            institution: values.institution,
            description: values.description,
            startDate: String(values.startDate),
            endDate: String(values.endDate),
        })
            .then((response) => {
                console.log(response);
                debugger;
                dispatch(updateEducation());
                debugger;
                dispatch(getUserEducations(values.userId));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const deleteUserEducation = (eduId, userId) => {

    return(dispatch) => {
        request.delete("/usereducations/"+eduId)
            .then((response) => {

                dispatch(deleteEducation());
                dispatch(getUserEducations(userId));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};


export const getEducations = (payload) => {
    return { type: "GET_USER_EDUCATIONS", payload }
};

export const addEducation = () => {
    return { type: "ADD_USER_EDUCATION" }
};

export const deleteEducation = () => {
    return { type: "DELETE_USER_EDUCATION" }
};

export const updateEducation = () => {
    return { type: "UPDATE_USER_EDUCATION" }
};

//CV info - USER WORK EXPERIENCE CRUD

export const getUserWorkExperience = (userId) => {

    return(dispatch) => {
        request.get("/userworkexperiences/user/"+userId)
            .then((response) => {
                console.log(response.data);
                dispatch(getUserExperience(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};


export const getUserWorkExperience2 = (userId) => {

    return async (dispatch) => {
        try {
            const response = await request.get("/userworkexperiences/user/"+userId);

            console.log(response.data);
            dispatch(getUserExperience(response.data));
        }
        catch (error) {
            console.log(error);
        }
    }
};

export const addUserWorkExperience = (values, userId) => {

    return(dispatch) => {
        request.post("/userworkexperiences", {
            userId: values.userId,
            institution: values.institution,
            description: values.description,
            startDate: values.startDate,
            endDate: values.endDate,
        })
            .then((response) => {
                dispatch(addUserExperience());
                dispatch(getUserWorkExperience(userId));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};


export const updateUserWorkExperience = (values, userId) => {

    return(dispatch) => {
        request.put("/userworkexperiences/"+values.id, {
            userId: values.userId,
            institution: values.institution,
            description: values.description,
            startDate: values.startDate,
            endDate: values.endDate,
        })
            .then((response) => {
                dispatch(updateUserExperience());
                dispatch(getUserWorkExperience(userId));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const deleteUserWorkExperience = (workId, userId) => {

    return(dispatch) => {
        request.delete("/userworkexperiences/" + workId)
            .then((response) => {
                dispatch(deleteUserExperience());
                dispatch(getUserWorkExperience(userId));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};
export const getUserExperience = (payload) => {
    return { type: "GET_USER_WORK_EXPERIENCES", payload}
};
export const addUserExperience = () => {
    return { type: "ADD_USER_WORK_EXPERIENCE" }
};
export const updateUserExperience = () => {
    return { type: "UPDATE_USER_WORK_EXPERIENCE" }
};
export const deleteUserExperience = () => {
    return { type: "DELETE_USER_WORK_EXPERIENCE" }
};



//CV info - USER SKILLS CRUD

export const getUserSkills = (userId) => {

    return(dispatch) => {
        request.get("/userskills/user/"+userId)
            .then((response) => {
                console.log(response.data);
                dispatch(userSkills(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

// export const addUserSkill = (values, userId) => {
//
//     return async (dispatch) => {
//         request.post("/skills", {
//             name: values.name,
//         })
//             .then((response) => {
//                 console.log(response.data);
//                 dispatch(userSkills(response.data));
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
// };
export const userSkills = (payload) => {
    return { type: "GET_USER_SKILLS", payload}
};
export const addUserSkills = () => {
    return { type: "GET_USER_SKILLS" }
};
export const updateUserSkills = () => {
    return { type: "GET_USER_SKILLS" }
};
export const deleteUserSkills = () => {
    return { type: "GET_USER_SKILLS" }
};


