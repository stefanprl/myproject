import http from '../config/http';

import { increment } from './counter';

export const initLogin = (value) => {
  return (dispatch) => {
      http.post('/users/login', value)
          .then((response) => {
              localStorage.setItem('JOBS_PROJECT_IS_LOGGED_IN', true);
              localStorage.setItem('JOBS_PROJECT_USER_INFO', JSON.stringify(response.data));

              dispatch(onLoginSuccess(response.data));
              dispatch(increment());
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