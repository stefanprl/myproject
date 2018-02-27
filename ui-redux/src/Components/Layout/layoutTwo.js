import React, { Component } from 'react';
import Header from '../../Components/Header/header';
import ConnectedSwitch from '../../Components/ConnectedSwitch';
import Button from 'material-ui/Button';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Test from '../../Pages/test';
class Layout extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div style={{ border: '2px solid red' }}>
                <Header/>
                <h1>This will be the layout</h1>

                <nav>
                    <Button  color="primary" component={Link} to={`/test`}>Test</Button>
                    &nbsp;
                    { this.props.loggedInUserInfo.userRoleId === 1 ? <Button  color="primary" component={Link} to={`/admin`}>Admin</Button>  : null }

                    &nbsp;
                    { this.props.loggedInUserInfo.userRoleId === 2 || this.props.loggedInUserInfo.userRoleId === 1 ? <Button  color="primary" component={Link} to={`/companies`}>Companies</Button>  : null }


                    { this.props.loggedInUserInfo.userId ? <Button  color="primary" component={Link} to={`/jobs`}>Jobs</Button> : <p>Please log in</p>}
                </nav>

                <div style={{ border: '3px solid black' }}>
                    <ConnectedSwitch >
                        <Route exact path="/test" render={() => (<h1>Test</h1>)} />
                        { this.props.loggedInUserInfo.userRoleId === 1 ? <Route exact path="/admin" render={() => (<h1>admin</h1>)} /> : null  }
                        { this.props.loggedInUserInfo.userRoleId === 2 ? <Route exact path="/companies" render={() => (<h1>companies</h1>)} /> : null  }


                        <Route exact path="/jobs" render={() => {
                            const links = [];

                            for (let id = 1; id < 10; id++) {
                                links.push(
                                    <Button key={id} color="inherit" component={Link} to={`/job/${id}`}>
                                        Go to test with params { id }
                                    </Button>
                                );
                            }

                            return (<div>
                                <h1>Test2</h1>

                                { links }
                            </div>);
                        }
                        } />

                        <Route exact path="/job/:jobId" component={Test}/>

                        <Route path='*' render={() => (<h1>error</h1>)} />
                    </ConnectedSwitch>
                </div>


                {/*<Switch>
                    <Route></Route>
                    <Route></Route>
                </Switch>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedInUserInfo: {
        userId: 2,
        userRoleId: 1,
        username: 'vlad'
    }// state.auth.loggedInUserInfo,
});

const mapDispatch00000000oProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatch00000000oProps)(Layout);