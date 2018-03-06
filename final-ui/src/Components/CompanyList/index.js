import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CompanyImage from '../../Media/company.png';
import * as companyActions from "../../Actions/company";
import {connect} from "react-redux";
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';

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
    };

    deleteCompany = (id) => {
        this.props.deleteCompany(id);
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
                            <IconButton variant="fab" color="primary" aria-label="edit">
                                <ModeEdit/>
                            </IconButton>
                                <IconButton variant="fab" color="primary" aria-label="edit"  onClick={() => this.deleteCompany(id.id)}>
                                    <Delete/>
                                </IconButton>

                        </ListItem>
                    ))}
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
    deleteCompany: (value) => dispatch(companyActions.deleteCompany(value)),

});
const CompanyListC = connect(mapStateToProps, mapDispatchToProps)(CompanyList);

export default withStyles(styles)(CompanyListC);