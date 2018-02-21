import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import LogReg from '../LogRegForm/log-reg-form.js';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        
        <Modal
          aria-labelledby="Login/Registration panel"
          aria-describedby="Here you can login or register a new account on the platform"
          open={this.props.openState}
          onClose={this.props.closeState}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <LogReg
                            user={this.props.user}
                            pass={this.props.pass}
                            role={this.props.role}
                            isLogged={this.props.isLogged}
                            closeState={this.props.closeState}
                            loginHandler={this.props.loginHandler}
                            condRender={this.props.condRender}
                />

          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleModal);