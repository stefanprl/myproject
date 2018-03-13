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
import ReactDOM from 'react-dom';

class CompanyContentArea extends Component {

    getCompanies = (id) => {
        this.props.getCompanies(id);
    };

    getJobs = (id) => {
        this.props.getJobs(id);
        const tesNode = ReactDOM.findDOMNode(this.refs.jobs);
            window.scrollTo(0, tesNode.offsetTop);

    };
    componentDidMount(){
        this.getCompanies(this.props.userId);
    }

    render() {

        return (
            <div className="footer-padding">
                <Grid container spacing={24} alignItems="flex-start" justify="center">
                    <Grid item xs={12} lg={2} md={3} >
                        <div className="sidebar-container">
                            <Sidebar/>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={10} md={9} >
                        <div className="zero-padding">
                            <Grid container spacing={8}>
                                <Grid item md={6} xs={12}>
                                    <Paper>
                                        <h4>My Companies</h4>
                                        <CompanyList compData={this.props.companiesData} getComp={this.getCompanies} getJobs={this.getJobs}/>
                                    </Paper>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Paper>
                                        <h4>Company jobs</h4>
                                        <CompanyJobs ref="jobs" jobsData={this.props.jobsData}  />
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