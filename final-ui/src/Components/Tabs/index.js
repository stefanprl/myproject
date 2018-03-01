import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { Route, Link } from 'react-router-dom';
import ConnectedSwitch from '../../Components/ConnectedSwitch';

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
                <TabContainer>Something
                    <ConnectedSwitch >
                        <Route exact path="/users" render={() => (<h1>Test</h1>)} />
                        <Route path='*' render={() => (<h1>Not defined</h1>)} />
                    </ConnectedSwitch>
                </TabContainer>}
                {value === 1 && <TabContainer>Something 2
                    <ConnectedSwitch >
                        <Route exact path="/company-users" render={() => (<h1>admin</h1>)} />
                    </ConnectedSwitch>
                </TabContainer>}
                {value === 2 && <TabContainer>Something 3
                    <ConnectedSwitch >
                        <Route exact path="/admin-users" render={() => (<h1>Test3</h1>)} />
                    </ConnectedSwitch>
                </TabContainer>}
            </div>
        );
    }
}

TabsWrappedLabel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsWrappedLabel);