import React from 'react';
import Grid from 'material-ui/Grid';
import Sidebar from '../Sidebar/sidebar.js';
import '../Layout/layout.css';
import LandingPage from '../LandingPage/landing-page.js';
import TabsCompany from '../Tabs/tabs-company';
import './company-style.css';

function CompanyContentArea(props) {

    if(props.isLogged) {
        return(
            <Grid container spacing={24}>
                <Grid item md={3} hidden={{smDown: true}}>
                    <Sidebar
                        userRole={props.userRole}
                        handleChange={props.handleChange}
                    />

                </Grid>
                <Grid item md={9} xs={12}>
                    <div className="main-content-area">
                        <TabsCompany />
                    </div>

                </Grid>
            </Grid>
        );
    }
    else {
        return (<div className="landing-page"><LandingPage /></div>);
    }
}

export default CompanyContentArea;