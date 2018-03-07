import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CompanyImage from '../../Media/company.png';
import * as companyActions from "../../Actions/company";
import {connect} from "react-redux";
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';
import EditCompany from '../EditCompany';

const styles = theme => ({
    root: {
        width: '100%',
        minWidth: 350,
        maxHeight: 672,
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
});

class CompanyList extends React.Component {
    state = {
        checked: [1],
        open: false,
        editedCompany: '',
        id: ''

    };

    deleteCompany = (id) => {
        this.props.deleteCompany(id, this.props.userId);
    };

    handleCloseModal = () => {
        this.setState({ open: false});
    };
    handleEditCompany = (id, name) => {
        this.setState({
            open: true,
            editedCompany: name,
            id: id,
        });

    };
    handleChange = props => event => {
        this.setState({
            [props]: event.target.value,
        });
    };

    editCompany = () => {
        this.props.editCompany(this.state.id,this.state.editedCompany, this.props.userId);
        this.handleCloseModal();
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List>
                    {this.props.compData.map(id => (
                        <ListItem key={id.id} dense button className={classes.listItem} onClick={() => this.props.getJobs(id.id)}>
                            <Avatar alt="Company Image" src={CompanyImage} />
                            <ListItemText primary={`${id.name}`} />
                            <IconButton variant="fab" color="primary" aria-label="edit" onClick={ () => this.handleEditCompany(id.id,id.name)}>
                                <ModeEdit/>
                            </IconButton>
                                <IconButton variant="fab" color="primary" aria-label="edit"  onClick={() => this.deleteCompany(id.id)}>
                                    <Delete/>
                                </IconButton>
                        </ListItem>
                    ))}
                    <EditCompany handleChange={this.handleChange} editCompany={this.editCompany} editedCompany={this.state.editedCompany} open={this.state.open} closeModal={this.handleCloseModal}/>
                </List>
            </div>
        );
    }
}

CompanyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    userId: state.auth.loggedInUserInfo.id,
    companiesData: state.company.companiesData,
});
const mapDispatchToProps = (dispatch) => ({
    addComp: (values) => dispatch(companyActions.createCompany(values)),
    getCompanies: (value) => dispatch(companyActions.getMyCompanies(value)),
    deleteCompany: (value, userId) => dispatch(companyActions.deleteCompany(value, userId)),
    editCompany: (id, values, userId) => dispatch(companyActions.editCompany(id, values, userId)),

});
const CompanyListC = connect(mapStateToProps, mapDispatchToProps)(CompanyList);

export default withStyles(styles)(CompanyListC);