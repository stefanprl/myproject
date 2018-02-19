import React from 'react';
import Grid from 'material-ui/Grid';
import Sidebar from '../Sidebar/sidebar.js';
import Tabs from '../Tabs/tabs.js';
import '../Layout/layout.css';
import LandingPage from '../LandingPage/landing-page.js';

function ContentArea(props) {

    if(props.isLogged) {
    return(
        <Grid container spacing={24}>
            <Grid item md={2} hidden={{smDown: true}}>
              USER
              <Sidebar />

        </Grid>
        <Grid item md={10} xs={12}>
              <div className="main-content-area"> 
                    <Tabs />
              </div>
            
        </Grid>
        </Grid>
    );
        }
    else {
        return (<div className="landing-page"><LandingPage /></div>);
    }
}

export default ContentArea;