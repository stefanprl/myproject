import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {connect} from "react-redux";
import * as userActions from "../Actions/user";
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import "../Components/Layout/layout.css";
import ProfileModal from "../Components/ProfileModal";

const styles = theme => ({
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 100,
        height: 100,
    },
    paper: {
        padding: 10,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            id: null,
            institution: '',
            description: '',
            startDate: undefined,
            endDate: undefined,
            open: false,
            formType: 0,
        }
    }

    componentDidMount() {
        this.props.getUserInfo(this.props.loggedInUserInfo.id);
        this.props.getContactInfo(this.props.loggedInUserInfo.contactInfoId);
        this.props.getUserEducation(this.props.loggedInUserInfo.id);
        this.props.getUserWorkExperience(this.props.loggedInUserInfo.id);
        this.props.getUserSkills(this.props.loggedInUserInfo.id);
    }

    handleOpen = (name, id) => {

        this.setState({ open: true });
        if(name ==="edu"){
            this.setState({ formType: 0 })
        } else
        if(name ==="work"){
            this.setState({ formType: 1 })
        } else
        if(name ==="skills"){
            this.setState({ formType: 2 })
        } else
            if(name === "edit"){
            this.setState({id: id, formType: 3})
            }
            else
                if(name === "edit-work"){
                    this.setState({id: id, formType: 4})
                }
    };

    handleCloseModal = () => {
        this.setState({ open: false });
    };

    handleChange = props => event => {
        this.setState({
            [props]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="footer-padding">
                <Grid container spacing={24} justify="center">
                    <Grid item xs={12} sm={4}>
                        <Avatar
                            src={this.props.contactDetails.avatarUrl}
                            alt="avatar"
                            className={classNames(classes.avatar, classes.bigAvatar)}/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div>
                            <p>Name: {this.props.userInfo.firstName} {this.props.userInfo.lastName} </p>

                        </div>
                    </Grid>
                </Grid>
                    <Grid container spacing={8}>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={10}>

                        <div className="center-align">
                            <h2>Education</h2>
                            <Paper className={classes.paper}>
                                {this.props.userEducation.map(edu => (
                                    <div key={edu.id}>
                                    <div>
                                        <h3>{edu.institution}</h3>
                                        <Typography>{edu.description}</Typography>
                                        <p>{edu.startDate.substring(0,4)} - {edu.endDate.substring(0,4)}</p>
                                    </div>
                                        <div>
                                            <IconButton variant="fab" id="edit" name="edit" color="primary" aria-label="edit"
                                                        onClick={() => this.handleOpen(document.getElementById("edit").name, edu.id)}>
                                                <ModeEdit/>
                                            </IconButton>
                                            <IconButton variant="fab" color="primary" aria-label="delete"
                                                        onClick={() => this.props.deleteUserEducation(edu.id,this.props.loggedInUserInfo.id)}>
                                                <Delete/>
                                            </IconButton>
                                        </div>
                                        <Divider/>

                                    </div>
                            ))}
                            <div className="add-cv">
                                <Button variant="fab" id="edu" name="edu" color="secondary" aria-label="add" className={classes.button}
                                        onClick={() => this.handleOpen(document.getElementById("edu").name)}>
                                    <AddIcon />
                                </Button>
                            </div>
                            </Paper>
                            <h2>Work experience</h2>
                            <Paper className={classes.paper}>
                                {this.props.userWorkExperiences.map(work => (
                                    <div key={work.id}>
                                        <div>
                                            <h3>{work.institution}</h3>
                                            <Typography>{work.description}</Typography>
                                            <p>{work.startDate.substring(0,4)} - {work.endDate.substring(0,4)}</p>
                                        </div>
                                        <div>
                                            <IconButton variant="fab" id="edit-work" name="edit-work" color="primary" aria-label="edit"
                                                        onClick={() => this.handleOpen(document.getElementById("edit-work").name, work.id)}>
                                                <ModeEdit/>
                                            </IconButton>
                                            <IconButton variant="fab" color="primary" aria-label="delete"
                                                        onClick={() => this.props.deleteUserWorkExperience(work.id,this.props.loggedInUserInfo.id)}>
                                                <Delete/>
                                            </IconButton>
                                        </div>
                                        <Divider/>
                                    </div>
                                ))}
                                <div className="add-cv">
                                    <Button variant="fab" id="work" name="work" color="secondary" aria-label="add" className={classes.button}
                                            onClick={() => this.handleOpen(document.getElementById("work").name)}>
                                        <AddIcon />
                                    </Button>
                                </div>
                            </Paper>

                            <h2>Skills</h2>
                            <Paper className={classes.paper}>
                                {this.props.userSkills.map(skills => (
                                    <div key={skills.id}>
                                        <div>
                                            <h3>{skills.skillInfo.name}</h3>
                                            <Typography>Level: {skills.rating}</Typography>
                                            <p></p>
                                        </div>
                                        <div>
                                            <IconButton variant="fab" color="primary" aria-label="edit">
                                                <ModeEdit/>
                                            </IconButton>
                                            <IconButton variant="fab" color="primary" aria-label="edit">
                                                <Delete/>
                                            </IconButton>
                                        </div>
                                        <Divider/>
                                    </div>
                                ))}
                                <div className="add-cv">
                                    <Button variant="fab" id="skills" name="skills" color="secondary" aria-label="add" className={classes.button}
                                            onClick={() => this.handleOpen(document.getElementById("skills").name)} >
                                        <AddIcon />
                                    </Button>
                                </div>
                            </Paper>
                            <ProfileModal
                                id={this.state.id}
                                formType={this.state.formType}
                                openState={this.state.open}
                                closeState={this.handleCloseModal}
                                userId={this.props.loggedInUserInfo.id}
                                institution={this.state.institution}
                                description={this.state.description}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                handleChange={this.handleChange}
                            />
                        </div>

                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: {...state.user.userDetails},
    contactDetails: { ...state.user.contactInfo},
    loggedInUserInfo: state.auth.loggedInUserInfo,
    userEducation: state.user.userEducation,
    userWorkExperiences: state.user.userWorkExperiences,
    userSkills: state.user.userSkills,
});

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: (id) => dispatch(userActions.getUserInfo(id)),
    getContactInfo: (id) => dispatch(userActions.getContactInfo(id)),
    getUserEducation: (id) => dispatch(userActions.getUserEducations(id)),
    getUserWorkExperience: (id) => dispatch(userActions.getUserWorkExperience(id)),
    getUserSkills: (id) => dispatch(userActions.getUserSkills(id)),
    deleteUserEducation: (eduId, userId) => dispatch(userActions.deleteUserEducation(eduId, userId)),
    deleteUserWorkExperience: (workId, userId) => dispatch(userActions.deleteUserWorkExperience(workId, userId)),
});

let Profil = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default withStyles(styles)(Profil);