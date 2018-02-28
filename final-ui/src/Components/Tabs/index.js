import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

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
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>

                <AppBar position="static" >
                    <Tabs value={value} onChange={this.handleChange} centered >
                        <Tab label="Users" />
                        <Tab  label="Company Users" />
                        <Tab  label="Admins" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>
                    Tab 1
                </TabContainer>}
                {value === 1 && <TabContainer>
                Tab 2
                </TabContainer>}
                {value === 2 && <TabContainer>
                    Tab 3
                    /></TabContainer>}
            </div>
        );
    }
}

TabsWrappedLabel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsWrappedLabel);