import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import './tabs.css';

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

class TabsCompany extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>

                <AppBar position="static" >
                    <Tabs value={value} onChange={this.handleChange} centered >
                        <Tab label="My companies" />
                        <Tab  label="Jobs" />
                        <Tab  label="Applicants" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>Something
                    </TabContainer>}
                {value === 1 && <TabContainer>Something 2
                    </TabContainer>}
                {value === 2 && <TabContainer>Something 3
                    </TabContainer>}
            </div>
        );
    }
}

TabsCompany.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsCompany);