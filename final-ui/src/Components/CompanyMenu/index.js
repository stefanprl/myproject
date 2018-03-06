import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import {connect} from 'react-redux';
import * as companyActions from '../../Actions/company';
import '../Company/company-style.css';
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

    getCompanies = (id) => {
        this.props.getCompanies(id);
    };
    addCompany = () => {
        this.props.addComp(this.state, this.props.userId);
        this.clearFields();
        this.getCompanies(this.props.userId);
    };

    clearFields = () => {
      this.setState({
          name: '',
          userId: '',
      });
    };

    render() {

        return (
            <div>
                <div className="company-menu-style">
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
    addComp: (values, userId) => dispatch(companyActions.createCompany(values, userId)),
    getCompanies: (value) => dispatch(companyActions.getMyCompanies(value)),

});
const AdminMenuC = connect(mapStateToProps, mapDispatchToProps)(AdminMenu);
export default withStyles(styles)(AdminMenuC);