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



class EducationForm extends Component {

    addEducation = (values, userId) => {

        if(values.startDate !== undefined || values.endDate !== undefined || values.institution !== undefined) {
            this.props.addEducation(values, userId);
            this.props.closeModal();
        }
        else {
            console.log("Complete all fields");
        }

    };



    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <p>
                            Add new education experience.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={8}>
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
                                        type="month"
                                        value={this.props.startDate}
                                        onChange={this.props.handleChange("startDate")}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="date"
                                        label="End Date"
                                        type="month"
                                        value={this.props.endDate}
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
                        <Button variant="fab" color="primary" aria-label="add"
                                onClick={() => this.addEducation(this.props, this.props.userId)} >
                            <AddIcon/>
                        </Button>
                    </div>
                </Grid>
            </div>

        );
    }
}

EducationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
    addEducation: (values, userId) => dispatch(userActions.addUserEducation(values, userId)),
});
const EducationFormC = connect(mapStateToProps, mapDispatchToProps)(EducationForm);
export default withStyles(styles)(EducationFormC);