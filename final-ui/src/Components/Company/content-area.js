import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Sidebar from '../Sidebar';
import '../Layout/layout.css';
import './company-style.css';
import {connect} from 'react-redux';
import * as adminActions from "../../Actions/admin";
import Paper from 'material-ui/Paper';
import CompanyList from '../CompanyList';
import CompanyJobs from '../CompanyJobs';
import * as companyActions from "../../Actions/company";

class CompanyContentArea extends Component {

    getCompanies = (id) => {
        this.props.getCompanies(id);
    };

    getJobs = (id) => {
        this.props.getJobs(id);

    };
    componentDidMount(){
        this.getCompanies(this.props.userId);
    }

    render() {

        return (
            <div className="footer-padding">
                <Grid container spacing={24}>
                    <Grid item lg={2} md={3} hidden={{smDown: true}}>
                        <div className="sidebar-container">
                            <Sidebar/>
                        </div>
                    </Grid>
                    <Grid item lg={10} md={9} xs={12} >
                        <div className="zero-padding">
                            <Grid container spacing={8}>
                                <Grid item md={6} xs={6}>
                                    <Paper>
                                        <h4>My Companies</h4>
                                        <CompanyList compData={this.props.companiesData} getComp={this.getCompanies} getJobs={this.getJobs}/>
                                    </Paper>
                                </Grid>
                                <Grid item md={6} xs={6}>
                                    <Paper>
                                        <h4>Company jobs</h4>
                                        <CompanyJobs jobsData={this.props.jobsData}  />
                                    </Paper>
                                </Grid>
                            </Grid>

                        </div>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.loggedInUserInfo.id,
    companiesData: state.company.companiesData,
    jobsData: state.company.jobsData,

});

const mapDispatchToProps = (dispatch) => ({
    getCompanies: (value) => dispatch(companyActions.getMyCompanies(value)),
    addUser: (values) => dispatch(adminActions.registerRequest(values)),
    getJobs: (value) => dispatch(companyActions.getMyJobs(value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContentArea);