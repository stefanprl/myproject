import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import './layout.css';
import Header from '../Header/header.js';
import Footer from '../Footer/footer.js';
import ContentArea from '../ContentArea/content-area.js';
import CompanyContentArea from "../Company/company-content-area";
import AdminContentArea from "../Admin/admin-content-area";
import LandingPage from "../LandingPage/landing-page";
import request from "../../Utils/request";
import SnackDialog from "../Snackbar/snack-dialog.js";



const theme = createMuiTheme({
    pallette: {
        primary: '#000080'
    }
});
    
//const styles = theme => ({
//    header: {
//        backgroundColor: 'red',
//        padding: '10px'
//    }
//});



class Layout extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogged: true,
            username: '',
            password: '',
            userRole: 2,
            userType: '',

            selectedFirstName: '',
            selectedRole: '',
            selectedUsername: '',
            selectedLastName: '',
            selectedPassword: '',

            defaultUsername: '',
            defaultFName: '',
            defaultLName: '',

            editedUsername: '',
            editedFName: '',
            editedLName: '',

            basicUsersData: [],
            companyUsersData: [],
            adminUsersData: [],
            addUser: {  // nested states question
            },


            openSnack: false,
            snackText: '',
            transition: null
        };

    }

    handleOpenSnack = transition => () => {
        this.setState({ open: true, transition });
    };

    handleCloseSnack = () => {
        this.setState({ open: false });
    };

    handleChangeSnackText = (props) =>{
        this.setState({snackText: props})
    };

    // handleChange = name => event => {
    //     this.setState({
    //         [name]: event.target.value,
    //     });
    // };

    handleChangeAdd = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleLogin = () => {
    this.setState(prevState => ({
      isLogged: !prevState.isLogged
    }));
  };

    conditionalRender =(props) => {

        this.setState(({
            userRole: props.userRoleId
        }));
    };

    clearFields = () => {
        this.setState({
            selectedFirstName: '',
            selectedRole: '',
            selectedUsername: '',
            selectedLastName: '',
            selectedPassword: '',

        });
    };


    registerRequest = () => {

        let userR = this.state.selectedUsername;
        let passR = this.state.selectedPassword;
        let fName = this.state.selectedFirstName;
        let lName = this.state.selectedLastName;
        let role = this.state.selectedRole;



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


    getUsersData = (props) => {


        request.get("/userroles/"+props)
            .then((response) => {
                // some type error here regarding setState
                // switch(id){
                //     case 1:
                //         this.setState({adminUsersData : data});
                //         break;
                //     case 2:
                //         this.setState({companyUsersData : data});
                //         break;
                //     case 3:
                //         this.setState({basicUsersData : data});
                //         break;
                //     default:
                //         break;
                // }

                if(props===1){
                   this.setState({adminUsersData : response.data.usersInfoList});

                }
                else if(props===2){
                    this.setState({companyUsersData : response.data.usersInfoList});

                }

                else if(props===3){
                   this.setState({basicUsersData : response.data.usersInfoList});


                }

            })
            .catch((error) => {
                console.log(error);
            });
    };

    deleteUser = (id) => {

        request.delete('/users/'+id, {
        })
            .then((response) => {
                    console.log("User " + id + " deleted successfully!")


            })
            .catch((error) => {
                console.log(error);
            });
    };



    getUser = (id) =>{

        request.get('/users/'+id, {
        })
            .then((response) => {
                console.log("User " + id + " is here!");
                this.setState({ defaultUsername: response.data.username,
                                defaultFName: response.data.firstName,
                                defaultLName: response.data.lastName
                });


            })
            .catch((error) => {
                console.log(error);
            });
    };


    updateUser =(id) => {

        let userR = this.state.editedUsername;
        let fName = this.state.editedFName;
        let lName = this.state.editedLName;
        request.put('/users/'+id, {
            username : userR,
            firstName : fName,
            lastName : lName,
    })
            .then((response) => {
                console.log("User " + id + " is here!");



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


    handleTable = (value) => {
        this.setState({userType: value});
    };

    componentDidMount(){
        if(this.state.userRole === 1){
            this.getUsersData(1);
            this.getUsersData(2);
            this.getUsersData(3);
        }
    }


    render(){

        return(

    <MuiThemeProvider theme={theme}>
      <Grid container spacing={24}>

        <Grid item xs={12}>
        
            <Header loginHandler={this.handleLogin}
                    condRender={this.conditionalRender}
                    isLogged={this.state.isLogged}
                    user={this.state.username}
                    pass={this.state.password}
                    role={this.state.userRole}
                />

        </Grid>
        <Grid item md={12}>
          <div className="sub-header"></div>
        </Grid>
          <Grid item xs={12}>
              {/*{this.state.userRole===null && <LandingPage isLogged={this.state.isLogged}/>}*/}
              {this.state.userRole===1 && this.state.isLogged===true && <AdminContentArea

                  addUser={this.state.addUser}
                  isLogged={this.state.isLogged}

                  fName={this.state.selectedFirstName}
                  lName={this.state.selectedLastName}
                  userR={this.state.selectedUsername}
                  pass={this.state.selectedPassword}
                  roleR={this.state.selectedRole}

                  clearFields={this.clearFields}
                  getUsersData={this.getUsersData}

                  basicUsers={this.state.basicUsersData}
                  companyUsers={this.state.companyUsersData}
                  adminUsers={this.state.adminUsersData}

                  userRole={this.state.userRole}
                  userType={this.state.userType}

                  registerRequest={this.registerRequest}
                  handleChange={this.handleChangeAdd}
                  handleTable={this.handleTable}
                  deleteUser={this.deleteUser}
                  getUser={this.getUser}

                  defaultUsername={this.state.defaultUsername}
                  defaultFName={this.state.defaultFName}
                  defaultLName={this.state.defaultLName}

                  editedUsername={this.state.editedUsername}
                  editedFName={this.state.editedFName}
                  editedLName={this.state.editedLName}
                  updateUser={this.updateUser}

              />}
              {this.state.userRole===2 && this.state.isLogged===true && <CompanyContentArea
                  isLogged={this.state.isLogged}
                  userRole={this.state.userRole}
              />}
              {/*{this.state.userRole===3 && this.state.isLogged===true && <ContentArea isLogged={this.state.isLogged}/>}*/}
          </Grid>
      </Grid>
          <Grid container spacing={0}>
        <Grid item xs={12}>
          <Footer/>
            <SnackDialog open={this.state.open} handleOpenSnack={this.handleOpenSnack} handleCloseSnack={this.handleCloseSnack} transition={this.state.transition} snackText={this.state.snackText}/>
        </Grid>
      </Grid>

    </MuiThemeProvider>

        )
    }
}

export default Layout;