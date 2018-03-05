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
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            userRoleId: 0,
            contactInfoId: 2,
        };
    }


    handleChange = props => event => {
        this.setState({
            [props]: event.target.value,
        });
    };
    addUser = () => {
        console.log(this.state);
            this.props.addUsr(this.state);
            this.props.getUsers(1);
            this.props.getUsers(2);
            this.props.getUsers(3);

    };

    handleChangeAdd = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
            <div className="admin-menu-style">
                <FormControl>
                    <InputLabel>
                        First name
                    </InputLabel>
                    <Input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange('firstName')}
                    />
                </FormControl>
                <div>
                    <FormControl>
                        <InputLabel>
                            Last Name
                        </InputLabel>
                        <Input
                            value={this.state.lastName}
                            onChange={this.handleChange('lastName')}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel>
                            Username
                        </InputLabel>
                        <Input
                            onChange={this.handleChange('username')}
                        />
                    </FormControl>
                    <div>
                        <FormControl>
                            <InputLabel>
                                Password
                            </InputLabel>
                            <Input
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                type='password'
                            />
                        </FormControl>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel >User role</InputLabel>
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
                </div>

            </div>
                <div className="create-button">
                <Button variant="fab" color="primary" aria-label="add" onClick={this.addUser}>
                    <AddIcon/>
                </Button>
                </div>
            </div>

        );
    }
}

AdminMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
    addUsr: (values) => dispatch(adminActions.registerRequest(values)),
    getUsers: (value) => dispatch(adminActions.getUsersData(value)),
});
const AdminMenuC = connect(mapStateToProps, mapDispatchToProps)(AdminMenu);
export default withStyles(styles)(AdminMenuC);