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

export const onLoginSuccess = (payload) => {
    return { type: 'ON_LOGIN_SUCCESS', payload };
};

export const onLoginFailure = (error) => {
    return { type: 'ON_LOGIN_ERROR', error };
};

export const onAppInit = () => {
    return (dispatch) => {
        const userInfoFromLocalStorage = localStorage.getItem('USER_INFO');
        if (userInfoFromLocalStorage) {
            dispatch(onLoginSuccess(JSON.parse(userInfoFromLocalStorage)));
        }
    }
};
