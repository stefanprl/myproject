import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';



class LoginButtonC extends Component{
    constructor(props){
        super(props);
        this.state={
            anchorEl: null,
            open: false,

        }
    }
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });

    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogOut = () => {
        this.props.loginHandler(false);
        // this.props.condRender(null);

    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleCloseModal = () => {
        this.setState({ open: false });
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
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleLogOut}>Log out</MenuItem>
                    </Menu>
                </div>

            );}
        else {
            return(
                <div>
                    <Button variant="raised" color="secondary" onClick={this.handleOpen}>
                        Log in
                    </Button>

                </div>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({

});

const LoginButton = connect(mapStateToProps, mapDispatchToProps)(LoginButtonC);

export default LoginButton;