import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import LoginModal from '../LoginModal';
import {connect} from 'react-redux';
import { onLogout } from '../../Actions/authentication';
import { Link } from 'react-router-dom';



class LoginButtonC extends Component{
    constructor(props){
        super(props);
        this.state={
            anchorEl: null,
            open: false,
            openMenu: false

        }
    }
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });

    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    handleOpen = () => {
        this.setState({ open: true });
    };

    handleCloseModal = () => {
        this.setState({ open: false });
    };
    onLogout = () => {
        this.props.onLogout();
    };
    render(){
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        if(this.props.isLogged){
            return(
                <div>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}><Link to="/profile">Profile</Link></MenuItem>
                        <MenuItem onClick={this.onLogout}>Log out</MenuItem>
                    </Menu>
                </div>

            );}
        else {
            return(
                <div>
                    <Button variant="raised" color="secondary" onClick={this.handleOpen}>
                        Log in
                    </Button>
                    <LoginModal openState={this.state.open} closeState={this.handleCloseModal} />

                </div>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(onLogout()),
});

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
});

const LoginButton = connect(mapStateToProps, mapDispatchToProps)(LoginButtonC);

export default LoginButton;