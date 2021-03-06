import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import LoginButton from './loginButton.js';
import {connect} from "react-redux";

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function MenuAppBar(props) {

    const { classes } = props;

    return (
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              ReactJS AROBS
            </Typography>
              <LoginButton
                />
                
          </Toolbar>
        </AppBar>
      </div>
    );

}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({

});

const Header = connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);

export default withStyles(styles)(Header);