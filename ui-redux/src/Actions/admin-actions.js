import request from "../Config/request";

export const registerRequest = () => {

        let userR = this.state.selectedUsername;
        let passR = this.state.selectedPassword;
        let fName = this.state.selectedFirstName;
        let lName = this.state.selectedLastName;
        let role = this.state.selectedRole;


return (dispatch) => {
        request.post('/users', {
            username: userR,
            password: passR,
            firstName: fName,
            lastName: lName,
            userRoleId: role
        })
            .then((response) => {

                // let userRole = response.data[0].userRoleId;
                this.clearFields();
                if(this.state.userRole === 1){
                    this.getUsersData(1);
                    this.getUsersData(2);
                    this.getUsersData(3);
                }

            })
            .catch((error) => {
                console.log(error);
            });

        if(this.state.userRole === 1){
            this.getUsersData(1);
            this.getUsersData(2);
            this.getUsersData(3);
        }


    };
};



export const getUsersData = (props) => {
debugger;
return(dispatch) => {
    request.get("/userroles/" + props)
        .then((response) => {
            debugger;
            if (props === 1) {
                this.setState({adminUsersData: response.data.usersInfoList});
                dispatch(response.data.usersInfoList);
            }
            else if (props === 2) {
                this.setState({companyUsersData: response.data.usersInfoList});
                dispatch(response.data.usersInfoList);
            }

            else if (props === 3) {
                this.setState({basicUsersData: response.data.usersInfoList});
                dispatch(response.data.usersInfoList);
            }

        })
        .catch((error) => {
            console.log(error);
        });
}
};


export const clearFields = () => {
    return(dispatch) => {
    this.setState({
        selectedFirstName: '',
        selectedRole: '',
        selectedUsername: '',
        selectedLastName: '',
        selectedPassword: '',

    });
}};