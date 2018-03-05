import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import CompanyImage from '../../Media/company.png';
import * as companyActions from "../../Actions/company";
import {connect} from "react-redux";

const styles = theme => ({
    root: {
        width: '100%',
        minWidth: 350,
        backgroundColor: theme.palette.background.paper,
    },
});

class CompanyList extends React.Component {
    state = {
        checked: [1],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    getCompanies = (id) => {

    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List>
                    {[0, 1, 2, 3].map(value => (
                        <ListItem key={value} dense button className={classes.listItem}>
                            <Avatar alt="Remy Sharp" src={CompanyImage} />
                            <ListItemText primary={`Line item ${value + 1}`} />
                            <ListItemSecondaryAction>
                                <Checkbox
                                    onChange={this.handleToggle(value)}
                                    checked={this.state.checked.indexOf(value) !== -1}
                                />
                            </ListItemSecondaryAction>
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
});
const mapDispatchToProps = (dispatch) => ({
    addComp: (values) => dispatch(companyActions.createCompany(values)),
    getCompanies: (value) => dispatch(companyActions.getMyCompanies(value)),

});
const CompanyListC = connect(mapStateToProps, mapDispatchToProps)(CompanyList);

export default withStyles(styles)(CompanyListC);