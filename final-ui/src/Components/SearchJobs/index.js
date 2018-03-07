import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Icon from  'material-ui-icons/Search';

const styles = theme => ({
    root: {
        padding: 10,
        margin: '0 auto',
        maxWidth: '50%',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 190,
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});


function SearchJobs(props) {

        const { classes } = props;
        return(
            <div>
            <Paper className={classes.root}>
                <FormControl>
                    <InputLabel>
                        Job name
                    </InputLabel>
                    <Input
                        name="name"
                    />
                </FormControl>
                &nbsp;
                <FormControl className={classes.formControl}>
                    <InputLabel >Company</InputLabel>
                    <Select
                        value=""
                        inputProps={{
                            name: 'companyName',
                            id: 'companyId',
                        }}
                    >    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        <MenuItem value={1}>AROBS</MenuItem>
                        <MenuItem value={2}>HP</MenuItem>
                        <MenuItem value={3}>Microsoft</MenuItem>
                    </Select>
                </FormControl>
                <Button className={classes.button} variant="raised" color="primary">
                    Search
                    <Icon className={classes.rightIcon}>Search</Icon>
                </Button>
            </Paper>
            </div>
        );

}

export default withStyles(styles)(SearchJobs);