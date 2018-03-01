import React from 'react';
import Grid from 'material-ui/Grid';
import Sidebar from '../Sidebar';
import Tabs from '../Tabs';
import '../Layout/layout.css';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import './admin-style.css';
import {connect} from 'react-redux';
import * as adminActions from "../../Actions/admin";

let userAdd = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    userRole: ''

};

function AdminContentArea(props) {
    function addUser() {
        props.addUser(userAdd);
    }
    return (
        <div className="footer-padding">
            <Grid container spacing={24}>
                <Grid item lg={2} md={3} hidden={{smDown: true}}>
                    <div className="sidebar-container">
                        <Sidebar/>
                    </div>
                    <div className="create-button">
                        <Button variant="fab" color="primary" aria-label="add" onClick={addUser}>
                            <AddIcon/>
                        </Button>
                    </div>
                </Grid>
                <Grid item lg={10} md={9} xs={12}>
                    <div className="main-content-area">
                        <Tabs/>

                    </div>

                </Grid>
            </Grid>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addUser: (values) => dispatch(adminActions.registerRequest(values))
});

export default connect(null, mapDispatchToProps)(AdminContentArea);