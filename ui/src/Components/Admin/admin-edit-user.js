import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Button from 'material-ui/Button';
import request from '../../Utils/request.js';
import Modal from 'material-ui/Modal';


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
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 25,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});


function EditUser(props) {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <Modal aria-labelledby="Login/Registration panel"
                   aria-describedby="Here you can login or register a new account on the platform"
                   open={props.open}
                   onClose={props.closeModal} >
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="title" id="modal-title">
                        Edit the selected user
                    </Typography>
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
                        onChange={props.handleChange('editedUsername')}
                        value={props.editedUsername}

                    />
                    <FormHelperText id="name-helper-text">{props.defaultUsername}</FormHelperText>
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
                        onChange={props.handleChange('editedFName')}
                        value={props.editedFName}

                    />
                    <FormHelperText id="name-helper-text">{props.defaultFirstName}</FormHelperText>
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
                        onChange={props.handleChange('editedLName')}
                        value={props.editedLName}

                    />
                    <FormHelperText id="name-helper-text">{props.defaultLastName}</FormHelperText>
                </FormControl>

                <br></br>
                <br></br>
                    <Button onClick={props.updateUser} variant="raised" color="secondary">Update user</Button>
                </div>
            </Modal>
        </div>
    );
}

EditUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditUser);