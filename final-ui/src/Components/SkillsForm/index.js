import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import {connect} from 'react-redux';
import * as adminActions from '../../Actions/admin';
import '../Admin/admin-style.css';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
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
class SkillsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            institution: '',
            description: '',
            startDate: '',
            endDate: '',
        };
    }


    handleChange = props => event => {
        this.setState({
            [props]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <h4>
                            Add new education experience.
                        </h4>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className="admin-menu-style">
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel >Skills</InputLabel>
                                    <Select
                                        value={this.state.userRoleId}
                                        onChange={this.handleChange('userRoleId')}
                                        native={true}
                                        inputProps={{
                                            name: 'userRole',
                                            id: 'user-roles',
                                        }}
                                    >   <option defaultValue={0} disabled ></option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Company User</option>
                                        <option value={3}>User</option>
                                    </Select>
                                </FormControl>
                            </div>
                            </div>
                            <br></br>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel >Level</InputLabel>
                                    <Select
                                        value={this.state.userRoleId}
                                        onChange={this.handleChange('userRoleId')}
                                        native={true}
                                        inputProps={{
                                            name: 'userRole',
                                            id: 'user-roles',
                                        }}
                                    >   <option defaultValue={0} disabled ></option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>

                                    </Select>
                                </FormControl>
                            </div>
                    </Grid>
                    <div className="cv-modal">
                        <Button variant="fab" color="primary" aria-label="add" onClick={this.addUser}>
                            <AddIcon/>
                        </Button>
                    </div>
                </Grid>
            </div>

        );
    }
}

SkillsForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
    addUsr: (values) => dispatch(adminActions.registerRequest(values)),
    getUsers: (value) => dispatch(adminActions.getUsersData(value)),
});
const SkillsFormC = connect(mapStateToProps, mapDispatchToProps)(SkillsForm);
export default withStyles(styles)(SkillsFormC);