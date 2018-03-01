import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import {connect} from 'react-redux';
import * as adminActions from '../../Actions/admin';
import '../Admin/admin-style.css';

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
});


class AdminMenu extends Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleChangeAdd = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className="admin-menu-style">
                <FormControl>
                    <InputLabel>
                        First name
                    </InputLabel>
                    <Input
                        name="selectedFirstName"
                        onChange={this.handleChange('selectedFirstName')}
                    />
                </FormControl>
                <div>
                    <FormControl>
                        <InputLabel>
                            Last Name
                        </InputLabel>
                        <Input
                            onChange={this.handleChange('selectedLastName')}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel>
                            Username
                        </InputLabel>
                        <Input
                            onChange={this.handleChange('selectedUsername')}
                        />
                    </FormControl>
                    <div>
                        <FormControl>
                            <InputLabel>
                                Password
                            </InputLabel>
                            <Input
                                onChange={this.handleChange('selectedPassword')}
                                type='password'
                            />
                        </FormControl>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel >User role</InputLabel>
                                <Select
                                    onChange={this.handleChange('selectedRole')}
                                    native={true}
                                    inputProps={{
                                        name: 'roles',
                                        id: 'user-roles',
                                    }}
                                >   <option defaultValue={0} disabled ></option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Company User</option>
                                    <option value={3}>User</option>
                                </Select>
                            </FormControl>
                        </div>
                        {/*<div className="create-button">*/}
                        {/*<Button variant="fab" color="primary" aria-label="add" className={classes.button}>*/}
                        {/*<AddIcon />*/}
                        {/*</Button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

        );
    }
}

AdminMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    selectedFirstName: state.admin.selectedFirstName,
    selectedRole: state.admin.selectedRole,
    selectedUsername: state.admin.selectedUsername,
    selectedLastName: state.admin.selectedLastName,
    selectedPassword: state.admin.selectedPassword,
});

const AdminMenuC = connect(mapStateToProps, null)(AdminMenu);
export default withStyles(styles)(AdminMenuC);