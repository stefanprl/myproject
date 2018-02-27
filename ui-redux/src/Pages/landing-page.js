import React from 'react';
import Grid from 'material-ui/Grid';

function LandingPage(props) {
    return(
        <Grid container spacing={24}>

            <Grid item xs={12}>
                <div>
                    <img src="https://jobsmag.org/wp-content/uploads/2017/06/jobsmag-cover.jpg" alt="Jobs" width="100%"/>
                </div>
            </Grid>


        </Grid>
    );
}

export default LandingPage;