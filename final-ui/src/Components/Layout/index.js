import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import './layout.css';
import Header from '../Header';
import Footer from '../Footer';
import AdminContentArea from "../Admin/content-area";
import CompanyContentArea from "../Company/content-area";
import UserContentArea from "../User/content-area";
import LandingPage from "../../Pages/landing-page";
import {connect} from 'react-redux';
import {onAppInit} from "../../Actions/authentication";
import {getUsersData} from "../../Actions/admin";
import {getMyCompanies} from "../../Actions/company";
import * as userActions from "../../Actions/user";
import Profile from "../../Pages/profile";
import { Route } from 'react-router-dom';
import ConnectedSwitch from '../../Components/ConnectedSwitch';


class Layout extends Component {

    componentDidMount(){
        this.props.onAppInit();
    };

    componentWillReceiveProps(newProps) {
        if (newProps.isLogged && !this.props.isLogged) {
            if (JSON.parse(localStorage.getItem("USER_INFO")).userRoleId === 1) {
                this.props.getUsersData(1);
                this.props.getUsersData(2);
                this.props.getUsersData(3);
            }

            if (JSON.parse(localStorage.getItem("USER_INFO")).userRoleId === 2) {
                this.props.getCompaniesData(this.props.loggedInUserInfo.id)
            }

            if (JSON.parse(localStorage.getItem("USER_INFO")).userRoleId === 3) {
                this.props.getAllJobs();
                this.props.getUserInfo(newProps.loggedInUserInfo.id);
            }
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Grid container spacing={24}>

                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    {this.props.isLogged === true ?
                    <Grid item md={12}>
                        <div className="sub-header"></div>
                    </Grid>
                        : null}

                    <Grid item xs={12}>
                        {this.props.isLogged === false ? <LandingPage/> : null}
                        {this.props.loggedInUserInfo.userRoleId === 1 && this.props.isLogged === true? <AdminContentArea/> : null}
                        {this.props.loggedInUserInfo.userRoleId === 2 && this.props.isLogged === true? <CompanyContentArea /> : null}
                        {this.props.loggedInUserInfo.userRoleId === 3 && this.props.isLogged === true? <UserContentArea /> : null}
                        <ConnectedSwitch >
                            <Route exact path="/profile" component={Profile} />
                            <Route path='*' render={null} />
                        </ConnectedSwitch>
                    </Grid>
                </Grid>
                <div className="push"></div>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Footer/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    loggedInUserInfo: state.auth.loggedInUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onAppInit: () => dispatch(onAppInit()),
    getUsersData: () => dispatch(getUsersData()),
    getCompaniesData: (id) => dispatch(getMyCompanies(id)),
    getAllJobs: () => dispatch(userActions.getAllJobs()),
    getUserInfo: (id) => dispatch(userActions.getUserInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);