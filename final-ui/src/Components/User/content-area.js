import React from 'react';
import Grid from 'material-ui/Grid';
import Jobs from '../Jobs';
import SearchJobs from '../SearchJobs';

function UserContentArea(props) {

    return (
        <div className="footer-padding">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <div>
                        <SearchJobs />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Jobs/>

                    </div>

                </Grid>
            </Grid>
        </div>
    );
}


export default UserContentArea;