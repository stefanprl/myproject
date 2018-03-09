import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {connect} from "react-redux";
import * as userActions from "../Actions/user";

class Profile extends Component {

    componentDidMount() {
        this.props.getUserInfo(this.props.loggedInUserInfo.id);
        this.props.getContactInfo(this.props.loggedInUserInfo.contactInfoId);
    }

    render() {

        return (
            <div className="footer-padding">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={4}>
                        <div>
                        <img src={this.props.contactDetails.avatarURL} alt="avatar"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div>
                            <p>Name: {this.props.userInfo.firstName} {this.props.userInfo.lastName} </p>

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            CV

                        </div>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: {...state.user.userDetails},
    contactDetails: { ...state.user.contactDetails},
    loggedInUserInfo: state.auth.loggedInUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: (id) => dispatch(userActions.getUserInfo(id)),
    getContactInfo: (id) => dispatch(userActions.getContactInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);