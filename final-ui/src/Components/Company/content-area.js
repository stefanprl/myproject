import React from 'react';
import Grid from 'material-ui/Grid';
import Sidebar from '../Sidebar';
import Tabs from '../Tabs';
import '../Layout/layout.css';
import './company-style.css';
import {connect} from 'react-redux';
import * as adminActions from "../../Actions/admin";
import Paper from 'material-ui/Paper';
import CompanyList from '../CompanyList';

function AdminContentArea(props) {

    return (
        <div className="footer-padding">
            <Grid container spacing={24}>
                <Grid item lg={2} md={3} hidden={{smDown: true}}>
                    <div className="sidebar-container">
                        <Sidebar />
                    </div>
                </Grid>
                <Grid item lg={10} md={9} xs={12}>
                    <div>
                        <Grid container spacing={8}>
                        <Grid item md={6} xs={6}>
                            <Paper>
                                <h1>Companiile mele</h1>
                                <CompanyList />
                            </Paper>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <Paper>
                                <h1>Joburile companiilor</h1>
                                <CompanyList/>
                            </Paper>
                        </Grid>
                        </Grid>

                    </div>

                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({

    companiesData: state.company.companiesData,

});

const mapDispatchToProps = (dispatch) => ({

    addUser: (values) => dispatch(adminActions.registerRequest(values)),

});

export default connect(null, mapDispatchToProps)(AdminContentArea);