import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import LoginButton from '../LoginButton';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

import "../Layout/layout.css";

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
    let h3Style= {
        color: '#fff',
    };

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                            <Link className="logo" to="/"> ReactJS AROBS </Link>
                    </Typography>

                        <h3 style={h3Style}>{props.user}</h3>

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
    user: state.auth.loggedInUserInfo.username,
});

const Header = connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);

export default withStyles(styles)(Header);