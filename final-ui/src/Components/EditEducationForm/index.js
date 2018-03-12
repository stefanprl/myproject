import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import {connect} from 'react-redux';
import * as userActions from '../../Actions/user';
import '../Admin/admin-style.css';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import ModeEdit from 'material-ui-icons/ModeEdit';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 190,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 190,
    },
});



class EditEducationForm extends Component {

    updateEducation = (values, userId) => {
        this.props.updateEducation(values, userId);
        this.props.closeModal();

    };



    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <p>
                            Add new education experience.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="admin-menu-style">
                            <FormControl>
                                <InputLabel>
                                    Institution name
                                </InputLabel>
                                <Input
                                    value={this.props.institution}
                                    name="institution"
                                    onChange={this.props.handleChange("institution")}
                                />
                            </FormControl>
                            <div>
                                <FormControl>
                                    <InputLabel>
                                        Description
                                    </InputLabel>
                                    <Input
                                        value={this.props.description}
                                        name="description"
                                        onChange={this.props.handleChange("description")}
                                    />
                                </FormControl>
                            </div>
                            <br></br>
                            <div>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Start Date"
                                        type="date"
                                        defaultValue={this.props.startDate}
                                        onChange={this.props.handleChange("startDate")}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="date"
                                        label="End Date"
                                        type="date"
                                        defaultValue={this.props.endDate}
                                        onChange={this.props.handleChange("endDate")}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                            </div>

                        </div>
                    </Grid>
                    <div className="cv-modal">
                        <Button variant="fab" color="primary" aria-label="edit"
                                onClick={() => this.updateEducation(this.props, this.props.userId)} >
                            <ModeEdit/>
                        </Button>
                    </div>
                </Grid>
            </div>

        );
    }
}

EditEducationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
    updateEducation: (values, userId) => dispatch(userActions.updateUserEducation(values, userId)),
});
const EditEducationFormC = connect(mapStateToProps, mapDispatchToProps)(EditEducationForm);
export default withStyles(styles)(EditEducationFormC);