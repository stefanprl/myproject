import request from '../../Utils/request.js';

export const initLogin = (props) => {
    
    console.log(props.user + props.pass);
      request.post('/users/login', {
        username: props.user,
        password: props.pass
      })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
            console.log(error);
  });
}
