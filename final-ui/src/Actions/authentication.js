import request from '../Config/request.js';
import { getUsersData } from './admin';

export const initLogin = ({ username, password }) => {
    // const username = values.username;
    return (dispatch) => {
        request.post('/users/login', { username, password })
            .then((response) => {
                localStorage.setItem('IS_LOGGED_IN', true);
                localStorage.setItem('USER_INFO', JSON.stringify(response.data));
                dispatch(onLoginSuccess(response.data));
                if(response.data.userRoleId === 1){
                    debugger;
                    getUsersData(1);
                    getUsersData(2);
                    getUsersData(3);
                }
                // dispatch(push('/home')
            })
            .catch((error) => {
                dispatch(onLoginFailure(error));

            });

    };
};



export const registerRequestUser = (values) => {

return(dispatch) => {
    request.post('/users', {
        username: values.username,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        userRoleId: 3,
        contactInfo: {}
    })
        .then((response) => {
            // let userRole = response.data[0].userRoleId;
            dispatch(onRegisterUser());


        })
        .catch((error) => {
            console.log(error);
        });
}
};

export const onLoginSuccess = (payload) => {
    return { type: 'ON_LOGIN_SUCCESS', payload };
};

export const onLoginFailure = (error) => {
    return { type: 'ON_LOGIN_ERROR', error };
};

export const onLogout = () => {
    localStorage.removeItem('IS_LOGGED_IN');
    localStorage.removeItem('USER_INFO');

    return { type: 'ON_LOGOUT' };
};

export const onRegisterUser = () => {
  return { type: 'ON_REGISTER' };
};

export const onAppInit = () => {
    return (dispatch) => {
        const userInfoFromLocalStorage = localStorage.getItem('USER_INFO');
        if (userInfoFromLocalStorage) {
            dispatch(onLoginSuccess(JSON.parse(userInfoFromLocalStorage)));
        }
    }
};
