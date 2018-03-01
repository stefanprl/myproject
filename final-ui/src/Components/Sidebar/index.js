import React from 'react';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid  from 'material-ui/Grid';
import './sidebar.css';
import AdminMenu from '../AdminMenu';
import {connect} from "react-redux";
import * as adminActions from "../../Actions/admin";


const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 80,
        height: 80,
    },
};

function Sidebar(props) {
    const { classes } = props;

    return(
        <div className="sidebar-layout">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Avatar alt="AROBS" src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAZ5AAAAJDIzZWI2MzUwLWIyYWUtNDE5Ny1hMGM2LTMxMjY1OTFhMGQ5NA.png" className={classNames(classes.avatar, classes.bigAvatar)} />
                </Grid>
                <Grid item xs={12}>
                    <p>Welcome, user!</p>
                </Grid>

                <Grid item xs={12}>
                    { props.loggedInUserInfo.userRoleId === 1 ? <AdminMenu/> : null}
                </Grid>
            </Grid>
        </div>
    );
}


const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    loggedInUserInfo: state.auth.loggedInUserInfo,
});

const SidebarC =  connect(mapStateToProps, null)(Sidebar);
export default withStyles(styles)(SidebarC);