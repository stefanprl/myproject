import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Modal from 'material-ui/Modal';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';

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
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    formControl: {
        minWidth: 200,
    }
});


function EditCompany(props) {

    const {classes} = props;


    return (
        <div className={classes.root}>
            <Modal aria-labelledby="Edit your company information."
                   aria-describedby="Here you can edit the information related to your company"
                   open={props.open}
                   onClose={props.closeModal} >
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="title" id="modal-title">
                        Edit company
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <InputLabel
                            FormControlClasses={{
                                focused: classes.inputLabelFocused,
                            }}
                            htmlFor="custom-color-input"
                        >
                            Company name
                        </InputLabel>
                        <Input
                            classes={{
                                inkbar: classes.inputInkbar,
                            }}
                            onChange={props.handleChange('editedCompany')}
                            name="editedCompany"
                            value={props.editedCompany}

                        />
                        <FormHelperText id="name-helper-text">Username</FormHelperText>
                    </FormControl>
                    <br></br>
                    <br></br>
                    <h5>In order to have your company more trustworthy, we recommend adding contact information to it!</h5>
                    <p>Pick an already created contact or create a new one:</p>
                    <div className={classes.root}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Contact information</InputLabel>
                            <Select
                                native
                                inputProps={{
                                    id: 'age-native-simple',
                                }}
                            >
                                <option value="" />
                                <option value={1}>Contact 1</option>
                                <option value={2}>Contact 2</option>
                                <option value={3}>Contact 3</option>
                            </Select>
                        </FormControl>
                    </div>
                    <br></br>
                    <Button variant="raised" color="secondary" className={classes.button} onClick={props.editCompany}>
                        Save
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

EditCompany.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditCompany);