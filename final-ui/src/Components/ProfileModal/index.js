import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import LogReg from '../LogReg';
import EducationForm from '../EducationForm';
import WorkForm from '../WorkForm';
import SkillsForm from '../SkillsForm';
import EditEducationForm from '../EditEducationForm';
import EditWorkExperienceForm from '../EditWorkExperienceForm';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };

}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

function ProfileModal(props) {

    const { classes } = props;

    return (
        <div>

            <Modal
                aria-labelledby="Profile panel"
                aria-describedby="Here you can add information related to your profiles"
                open={props.openState}
                onClose={props.closeState}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    {/*<LogReg closeModal={props.closeState}/>*/}
                    {props.formType === 0 ?
                        <EducationForm
                            formType={props.formType}
                            userId={props.userId}
                            institution={props.institution}
                            description={props.description}
                            startDate={props.startDate}
                            endDate={props.endDate}
                            handleChange={props.handleChange}
                            closeModal={props.closeState}
                    /> : null}
                    {props.formType === 1 ?
                        <WorkForm
                            formType={props.formType}
                            userId={props.userId}
                            institution={props.institution}
                            description={props.description}
                            startDate={props.startDate}
                            endDate={props.endDate}
                            handleChange={props.handleChange}
                            closeModal={props.closeState}
                    /> : null}
                    {props.formType === 2?
                        <SkillsForm
                            userId={props.userId}
                            handleChange={props.handleChange}
                    /> : null}
                    {props.formType === 3?
                        <EditEducationForm
                            id={props.id}
                            formType={props.formType}
                            userId={props.userId}
                            institution={props.institution}
                            description={props.description}
                            startDate={props.startDate}
                            endDate={props.endDate}
                            handleChange={props.handleChange}
                            closeModal={props.closeState}
                        /> : null}
                    {props.formType === 4?
                        <EditWorkExperienceForm
                            id={props.id}
                            formType={props.formType}
                            userId={props.userId}
                            institution={props.institution}
                            description={props.description}
                            startDate={props.startDate}
                            endDate={props.endDate}
                            handleChange={props.handleChange}
                            closeModal={props.closeState}
                        /> : null}
                </div>
            </Modal>
        </div>
    );

}

ProfileModal.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProfileModal);