import http from '../Config/request';
import { getUsersData } from './admin-actions';
// import push
export const initLogin = ({ username, password }) => {
    // const username = values.username;
    debugger;
    return (dispatch) => {
        http.post('/users/login', { username, password })
            .then((response) => {
                localStorage.setItem('IS_LOGGED_IN', true);
                localStorage.setItem('USER_INFO', JSON.stringify(response.data));

                // dispatch(getUsersData((response.data.userRoleId)));
                dispatch(onLoginSuccess(response.data));

                // dispatch(push('/home'))
            })
            .catch((error) => dispatch(onLoginFailure(error)));
    };
};

export const initRegister = (value) => {
    return (dispatch) => {
        http.post('/users/', value)
            .then((response) => {
                this.userInfoHandler(response.data);
                this.props.closeState(true);
                this.props.loginHandler(true);
                localStorage.setItem('JOBS_PROJECT_IS_LOGGED_IN', true);
                localStorage.setItem('JOBS_PROJECT_USER_INFO', JSON.stringify(response.data));

                dispatch(onLoginSuccess(response.data));
            })
            .catch((error) => dispatch(onLoginFailure(error)));
    };
};


export const onLoginSuccess = (payload) => {
    return { type: 'ON_LOGIN_SUCCESS', payload };
};

export const onLoginFailure = (error) => {
    return { type: 'ON_LOGIN_ERROR', error };
};

export const onLogout = () => {
    localStorage.removeItem('JOBS_PROJECT_IS_LOGGED_IN');
    localStorage.removeItem('JOBS_PROJECT_USER_INFO');

    return { type: 'ON_LOGOUT' };
};

export const onAppInit = () => {
    return (dispatch) => {
        const userInfoFromLocalStorage = localStorage.getItem('JOBS_PROJECT_USER_INFO');

        if (userInfoFromLocalStorage) {
            dispatch(onLoginSuccess(JSON.parse(userInfoFromLocalStorage)));
        }
    }
};