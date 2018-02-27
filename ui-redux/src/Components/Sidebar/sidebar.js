import React from 'react';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid  from 'material-ui/Grid';
import UserMenu from '../User-menu/user-menu.js'
import './sidebar.css';
import AdminMenu from '../Admin/admin-menu';

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
                  {props.userRole === 1 &&
                  <AdminMenu
                      userId="roles"
                      handleChange={props.handleChange}
                      addUser={props.addUser}
                      fName={props.fName}
                      lName={props.lName}
                      roleR={props.roleR}
                      userR={props.userR}
                      pass={props.pass}
                      clearFields={props.clearFields}
                  />}

                  {props.userRole === 3 && <UserMenu/>}
              </Grid>
          </Grid>
        </div>
    );
}

export default withStyles(styles)(Sidebar);