import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { Route, Link } from 'react-router-dom';
import ConnectedSwitch from '../../Components/ConnectedSwitch';
import Table from '../Table';
import {connect} from "react-redux";
import * as adminActions from "../../Actions/admin";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
    },
});

class TabsWrappedLabel extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };
    getUsersData = () => {
        this.props.getUsers(1);
        this.props.getUsers(2);
        this.props.getUsers(3);
    };
    componentWillMount(){
        this.getUsersData();

    }

    render() {
        const { value } = this.state;

        return (
            <div>

                <AppBar position="static" >
                    <Tabs value={value} onChange={this.handleChange} centered >
                        <Tab label="Basic Users" component={Link} to={`/users`} />
                        <Tab  label="Company Users" component={Link} to={`/company-users`} />
                        <Tab  label="Admin Users" component={Link} to={`/admin-users`} />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>
                    <ConnectedSwitch >
                        <Route exact path="/users" />
                        <Route path='*' render={() => (<h1>Not defined</h1>)} />
                    </ConnectedSwitch>
                    <Table usersData={this.props.basicUsersData || []} getUsersData={this.getUsersData} />
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <ConnectedSwitch >
                        <Route exact path="/company-users"/>
                    </ConnectedSwitch>
                    <Table usersData={this.props.companyUsersData || []} getUsersData={this.getUsersData} />
                </TabContainer>}
                {value === 2 && <TabContainer>
                    <ConnectedSwitch >
                        <Route exact path="/admin-users" />
                    </ConnectedSwitch>
                    <Table usersData={this.props.adminUsersData || []} getUsersData={this.getUsersData} />
                </TabContainer>}
            </div>
        );
    }
}

TabsWrappedLabel.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    basicUsersData: state.admin.basicUsersData,
    companyUsersData: state.admin.companyUsersData,
    adminUsersData: state.admin.adminUsersData,
});
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (value) => dispatch(adminActions.getUsersData(value))
    }
};
const TabsWrappedLabelC = connect(mapStateToProps, mapDispatchToProps)(TabsWrappedLabel);

export default withStyles(styles)(TabsWrappedLabelC);