import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import './layout.css';
import Header from '../Header/header.js';
import Footer from '../Footer/footer.js';
import ContentArea from '../ContentArea/content-area.js';
import CompanyContentArea from "../Company/company-content-area";
import AdminContentArea from "../Admin/admin-content-area";
import LandingPage from "../../Pages/landing-page";
import request from "../../Config/request";
import SnackDialog from "../Snackbar/snack-dialog.js";
import {connect} from "react-redux";

class LayoutRedux extends Component {


    render(){

        return(
            <div>
                <Grid container spacing={24}>

                    <Grid item xs={12}>

                        <Header />

                    </Grid>
                    <Grid item md={12}>
                        <div className="sub-header"></div>
                    </Grid>
                    <Grid item xs={12}>
                        {localStorage.getItem('USER_INFO') === null ? <LandingPage /> : null}
                        {localStorage.getItem('USER_INFO') === 1 && this.props.isLogged===true ? <AdminContentArea />: null}
                        {/*{this.props.loggedInUserInfo.userRoleId===2 && this.props.isLogged===true ? <CompanyContentArea />: null}*/}
                        {/*{this.state.userRole===3 && this.state.isLogged===true && <ContentArea isLogged={this.state.isLogged}/>}*/}
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Footer/>
                        {/*<SnackDialog open={this.state.open} handleOpenSnack={this.handleOpenSnack} handleCloseSnack={this.handleCloseSnack} transition={this.state.transition} snackText={this.state.snackText}/>*/}
                    </Grid>
                </Grid>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    loggedInUserInfo: state.auth.loggedInUserInfo,
    isLogged: state.auth.isLogged,
        // userId: 2,
        // userRoleId: 1,
        // username: 'vlad'
    // }// state.auth.loggedInUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
   getUsersData: (id) => dispatch()
});

export default connect(mapStateToProps, null)(LayoutRedux);