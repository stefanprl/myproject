import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import {connect} from 'react-redux';
import * as companyActions from '../../Actions/company';
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
            name: '',
            userId: this.props.userId,
        };
    }


    handleChange = props => event => {
        this.setState({
            [props]: event.target.value,
        });
    };
    addCompany = () => {
        this.props.addComp(this.state);
        this.clearFields();


    };

    clearFields = () => {
      this.setState({
          name: '',
          userId: '',
      });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="admin-menu-style">
                    <FormControl>
                        <InputLabel>
                            Company Name
                        </InputLabel>
                        <Input
                            value={this.state.name}
                            name="name"
                            onChange={this.handleChange('name')}
                        />
                    </FormControl>
                </div>
                <div className="create-button">
                    <Button variant="fab" color="primary" aria-label="add" onClick={this.addCompany}>
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
    userId: state.auth.loggedInUserInfo.id,
});
const mapDispatchToProps = (dispatch) => ({
    addComp: (values) => dispatch(companyActions.createCompany(values)),

});
const AdminMenuC = connect(mapStateToProps, mapDispatchToProps)(AdminMenu);
export default withStyles(styles)(AdminMenuC);