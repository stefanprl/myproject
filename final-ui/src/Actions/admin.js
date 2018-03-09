import request from "../Config/request";
import '../Reducers/admin-reducer';

export const getUsersData = (value) => {

    return(dispatch) => {
        request.get("/userroles/" + value)
            .then((response) => {
                if (value === 1) {
                    dispatch(getAdminUsers(response.data.usersInfoList));
                }
                else if (value === 2) {
                    dispatch(getCompanyUsers(response.data.usersInfoList));
                }
                else if (value === 3) {
                    dispatch(getBasicUsers(response.data.usersInfoList));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const registerRequest = (values) => {
    return(dispatch) => {
    console.log(values);
        console.log("am ajuns la actiune");
    request.post('/users', {
        username: values.username,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        userRoleId: values.userRoleId,
        contactInfo: values.contactInfo,
    })
        .then((response) => {
            dispatch(registerSuccess());
            getUsersData(1);
            getUsersData(2);
            getUsersData(3);

        })
        .catch((error) => {
            console.log(error);
        });

    }
};

export const deleteUser = (id) => {
    return (dispatch) => {

        request.delete('/users/' + id, {})
            .then((response) => {
                console.log("User " + id + " deleted successfully!");
                dispatch(userDeleted());
                dispatch(getUsersData(1));
                dispatch(getUsersData(2));
                dispatch(getUsersData(3));


            })
            .catch((error) => {
                console.log(error);
            });
    };
};


export const clearFields = () => {

};

export const registerSuccess = () => {
    console.log("ajunge aici la succes?");
    return { type: "CREATE_USER"};
};


export const getBasicUsers = (payload) => {
    return {type: "RETURN_BASIC_USERS", payload };
};

export const getAdminUsers = (payload) => {
    return {type: "RETURN_ADMIN_USERS", payload};
};

export const getCompanyUsers = (payload) => {
    return {type: "RETURN_COMPANY_USERS", payload};
};

export const userDeleted = (payload) => {
    return {type: "DELETE_USER", payload};
};
