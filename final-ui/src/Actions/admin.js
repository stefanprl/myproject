import request from "../Config/request";

export const getUsersData = (props) => {

    return(dispatch) => {
        request.get("/userroles/" + props)
            .then((response) => {
                if (props === 1) {

                    dispatch(response.data.usersInfoList);
                    console.log(response.data.usersInfoList);
                }
                else if (props === 2) {

                    dispatch(response.data.usersInfoList);
                }

                else if (props === 3) {

                    dispatch(response.data.usersInfoList);
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const registerRequest = (values) => {

    request.post('/users', values)
        .then((response) => {
            console.log(response);
            // let userRole = response.data[0].userRoleId;
            if(this.state.userRole === 1){
                this.getUsersData(1);
                this.getUsersData(2);
                this.getUsersData(3);
            }

        })
        .catch((error) => {
            console.log(error);
        });

        return {type: "CREATE_USER"};
};


export const clearFields = () => {

};
