import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import {connect} from "react-redux";
import { initLogin, registerRequestUser } from '../../Actions/authentication';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});



class LogRegC extends React.Component {
  state = {
        value: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        contactInfoId: 2,
        showPassword: false,
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangePass = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChangeUser = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  loginRequest = () => {
      this.props.initLoginFlow(this.state);
      //
      //         this.userInfoHandler(response.data);

  };

    registerRequest = () => {
        this.props.registerUser(this.state);
        this.props.closeModal();
    };


      


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
        
        <FormControl className={classes.formControl}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          Username
        </InputLabel>
        <Input
            value={this.state.username}
            onChange={this.handleChangeUser('username')}
            classes={{
            inkbar: classes.inputInkbar,
          }}
          id="custom-color-input"
        />
      </FormControl>
            <br></br>
            <br></br>
            
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            value={this.state.password}
            onChange={this.handleChangePass('password')}
            type={this.state.showPassword ? 'text' : 'password'}
          />
        </FormControl>
            
            <br></br>
            <br></br>
            <Button variant="raised" color="secondary" onClick={this.loginRequest}>Log in</Button>
            
        </TabContainer>}
        {value === 1 && <TabContainer>
        
        
        
        <FormControl className={classes.formControl}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          Username
        </InputLabel>
        <Input
          classes={{
            inkbar: classes.inputInkbar,
          }}

          value={this.state.username}
          onChange={this.handleChangeUser('username')}
        />
      </FormControl>
            <br></br>
            <br></br>
            
            <FormControl className={classes.formControl}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          First Name
        </InputLabel>
        <Input
          classes={{
            inkbar: classes.inputInkbar,
          }}

          value={this.state.firstName}
          onChange={this.handleChangeUser('firstName')}
        />
      </FormControl>
            <br></br>
            <br></br>
            
            <FormControl className={classes.formControl}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          Last Name
        </InputLabel>
        <Input
          classes={{
            inkbar: classes.inputInkbar,
          }}

          value={this.state.lastName}
          onChange={this.handleChangeUser('lastName')}
        />
      </FormControl>
            <br></br>
            <br></br>
            
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            value={this.state.password}
            onChange={this.handleChangePass('password')}
            type={this.state.showPassword ? 'text' : 'password'}
          />
        </FormControl>
            
            <br></br>
            <br></br>
            <Button onClick={this.registerRequest} variant="raised" color="secondary">Register</Button>
        
        
        
        
        </TabContainer>}
      </div>
    );
  }
}

LogRegC.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    initLoginFlow: (value) => dispatch(initLogin(value)),
    registerUser: (value) => dispatch(registerRequestUser(value))
});
// const mapStateToProps = (state) => ({
//
//     //states used when a basic user registers on the platform
//     value: state.authReducer.value,
//     username: state.authReducer.username,
//     password: state.authReducer.password,
//     firstName: state.authReducer.firstName,
//     lastName: state.authReducer.lastName,
//     showPassword: state.authReducer.showPassword,
// });

const LogReg = connect(null, mapDispatchToProps)(LogRegC);

export default withStyles(styles)(LogReg);