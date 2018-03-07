import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import JobImage from '../../Media/job.png';
import * as companyActions from "../../Actions/company";
import {connect} from "react-redux";
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import '../Layout/layout.css';
import Divider from 'material-ui/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        minWidth: 350,
        maxHeight: 672,
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
});

class CompanyJobs extends React.Component {
    state = {
        checked: [1],
    };


    render() {
        const { classes } = this.props;
        console.log(this.props.jobsData);

        return (
            <div className={classes.root}>
                <List>
                    {this.props.jobsData.map(j => (
                        <ExpansionPanel key={j.id}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <ListItem key={j.id} className={classes.listItem}>
                                    <Avatar alt="Company Image" src={JobImage} />
                                    <ListItemText primary={`${j.name}`} />
                                    <IconButton variant="fab" color="primary" aria-label="edit">
                                        <ModeEdit/>
                                    </IconButton>
                                    <IconButton variant="fab" color="primary" aria-label="edit">
                                        <Delete/>
                                    </IconButton>
                                </ListItem>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                    <div className="jobs-description">
                                        <div>
                                        <h4>Description: </h4>
                                        </div>
                                        <div>
                                        <p>{j.description}</p>
                                        </div>
                                    </div>
                                <br></br>
                                <Divider />
                                &nbsp;
                                    <div className="jobs-availability">
                                        <h4>Available: </h4>
                                        {j.isAvailable ? <p>Yes</p> : <p>No</p>}
                                    </div>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    ))}
                </List>
            </div>
        );
    }
}

CompanyJobs.propTypes = {
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

});
const CompanyJobsC = connect(mapStateToProps, mapDispatchToProps)(CompanyJobs);

export default withStyles(styles)(CompanyJobsC);