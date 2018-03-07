import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
// import Subheader from 'material-ui/List/ListSubheader';
import jobPost from '../../Media/job-post.png';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import Grid from 'material-ui/Grid';
import * as userActions from '../../Actions/user';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        height: 'auto',
        padding: 20,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});
function Jobs(props) {
    console.log(props.allJobsData);
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
            <GridList cellHeight={200} cols={5} spacing={15}  className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{width: '100%', height: 'auto' }}>
                </GridListTile>
                {props.allJobsData.map(tile => (
                    <GridListTile key={tile.id}>
                        <img src={jobPost} alt={tile.name} />
                        <GridListTileBar
                            title={tile.name}
                            subtitle={<span>by: {tile.companyInfo.name}</span>}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            </Grid>
            <h5>Uh, oh! It seems that these are all the available jobs for now.</h5>
        </div>
    );
}

Jobs.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
    allJobsData: state.user.allJobsData,
});

const mapDispatchToProps = (dispatch) => ({
    getAllJobs: () => dispatch(userActions.getAllJobs()),
});
const JobsC = connect(mapStateToProps, mapDispatchToProps)(Jobs);
export default withStyles(styles)(JobsC);