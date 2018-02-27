import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import './company-style.css';

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


function CompanyMenu(props) {

        const { classes } = props;

        return (
            <div className="admin-menu-style">
                <FormControl>
                    <InputLabel>
                        First name
                    </InputLabel>
                    <Input
                        value={props.fName}
                        onChange={props.handleChange('selectedFirstName')}
                    />
                </FormControl>
                <div>
                    <FormControl>
                        <InputLabel>
                            Last Name
                        </InputLabel>
                        <Input
                            value={props.lName}
                            onChange={props.handleChange('selectedLastName')}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel>
                            Username
                        </InputLabel>
                        <Input
                            value={props.userR}
                            onChange={props.handleChange('selectedUsername')}
                        />
                    </FormControl>
                    <div>
                        <FormControl>
                            <InputLabel>
                                Password
                            </InputLabel>
                            <Input
                                value={props.pass}
                                onChange={props.handleChange('selectedPassword')}
                                variant='password'
                            />
                        </FormControl>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel >User role</InputLabel>
                                <Select
                                    value={props.roleR}
                                    onChange={props.handleChange('selectedRole')}
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

CompanyMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyMenu);