import React from 'react';
import Grid from 'material-ui/Grid';
import Sidebar from '../Sidebar/sidebar.js';
import Tabs from '../Tabs/tabs.js';
import '../Layout/layout.css';
import LandingPage from '../LandingPage/landing-page.js';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import './admin-style.css';

function AdminContentArea(props) {

    if(props.isLogged) {
        return(
            <div className="footer-padding">
            <Grid container spacing={24}>
                <Grid item lg={2} md={3} hidden={{smDown: true}}>
                    <div className="sidebar-container">
                    <Sidebar
                        addUser={props.addUser}
                        handleChange={props.handleChange}
                        fName={props.fName}
                        lName={props.lName}
                        roleR={props.roleR}
                        userR={props.userR}
                        pass={props.pass}
                        clearFields={props.clearFields}
                        userRole={props.userRole}

                    />
                    </div>
                    <div className="create-button">
                        <Button variant="fab" color="primary" aria-label="add" onClick={props.registerRequest}>
                            <AddIcon />
                        </Button>
                    </div>
                </Grid>
                <Grid item lg={10} md={9} xs={12}>
                    <div className="main-content-area">
                        <Tabs
                            handleChange={props.handleChange}
                            deleteUser={props.deleteUser}
                            getUsersData={props.getUsersData}
                            userType={props.userType}
                            userRole={props.userRole}
                            handleTable={props.handleTable}
                            basicUsers={props.basicUsers}
                            companyUsers={props.companyUsers}
                            adminUsers={props.adminUsers}
                            getUser={props.getUser}

                            defaultUsername={props.defaultUsername}
                            defaultFName={props.defaultFName}
                            defaultLName={props.defaultLName}

                            editedUsername={props.editedUsername}
                            editedFName={props.editedFName}
                            editedLName={props.editedLName}
                            updateUser={props.updateUser}

                        />

                    </div>

                </Grid>
            </Grid>
            </div>
        );
    }
    else {
        return (<div className="landing-page"><LandingPage /></div>);
    }
}

export default AdminContentArea;