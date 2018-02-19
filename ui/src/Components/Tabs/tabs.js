import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import EnhancedTable from '../Table/table.js';
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

class TabsWrappedLabel extends Component {
  state = {
      value: 0,
  };

  handleChange = (event, value) => {
   this.setState({ value });


   // console.log(this.props.getUsersData(value));

//            if(value==="one") {
//          <Link to="/"></Link>
//      }
//      else if(value==="two") {
//          <Link to="/editUser"></Link>
//      }
//      else if(value==="three"){
//          <Link to="/about"></Link>
//      }


//<Link className="text-style" to="/">Home</Link>
//<Link to="/editUser">Edit User</Link>
//<Link to="/about">About</Link>
  };


    handleTableData = (value) => {
      let usersData;
      if(value === 1){
        usersData = this.props.basicUsers;
        return usersData;
      } else if( value === 2){
        usersData = this.props.companyUsers;
        return usersData;
      } else if( value === 3){
        usersData = this.props.adminUsers;
        return usersData;
      }
    };


    componentWillMount(){
        if(this.props.userRole === 1){
            this.props.getUsersData(1);
            this.props.getUsersData(2);
            this.props.getUsersData(3);

        }
    };

    componentDidUpdate(){
        console.log('Chiar am actualizat componenta!!!');
        console.log(this.props.basicUsers);
        console.log(this.props.companyUsers);
        console.log(this.props.adminUsers);


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
            <EnhancedTable
                deleteUser={this.props.deleteUser}
                usersData={this.props.basicUsers}
                getUsersData={this.props.getUsersData}

            /></TabContainer>}
        {value === 1 && <TabContainer>
            <EnhancedTable
                deleteUser={this.props.deleteUser}
                usersData={this.props.companyUsers}
                getUsersData={this.props.getUsersData}
           /></TabContainer>}
        {value === 2 && <TabContainer>
            <EnhancedTable
                deleteUser={this.props.deleteUser}
                usersData={this.props.adminUsers}
                getUsersData={this.props.getUsersData}
            /></TabContainer>}
      </div>
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsWrappedLabel);