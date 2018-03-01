import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import ModeEdit from 'material-ui-icons/ModeEdit';
import { lighten } from 'material-ui/styles/colorManipulator';
import EditUser from '../EditUser';

const columnData = [
    { id: 'username', numeric: false, disablePadding: true, label: 'Username' },
    { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
    { id: 'created', numeric: true, disablePadding: false, label: 'Created at' },
    { id: 'updated', numeric: true, disablePadding: false, label: 'Updated at' },
];




class EnhancedTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };
    // componentDidMount(){
    //     this.props.getBasicUsers(this.prop.userType);
    // }
    render() {

        const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {columnData.map(column => {
                        return (
                            <TableCell
                                key={column.id}
                                numeric={column.numeric}
                                padding={column.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === column.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === column.id}
                                        direction={order}
                                        onClick={this.createSortHandler(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>

                        );
                    }, this)}
                    <TableCell padding="checkbox">
                        Edit user
                    </TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.dark,
                backgroundColor: lighten(theme.palette.secondary.light, 0.4),
            }
            : {
                color: lighten(theme.palette.secondary.light, 0.4),
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});

let EnhancedTableToolbar = props => {
    const { numSelected, classes } = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography variant="subheading">{numSelected} selected</Typography>
                ) : (
                    <Typography variant="title">Users</Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete">

                        <IconButton aria-label="Delete" onClick={props.handleDeleteUsers}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="Filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 800,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class EnhancedTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            order: 'asc',
            orderBy: 'username',
            selected: [],
            data: [].sort((a, b) => (a.name < b.name ? -1 : 1)),
            page: 0,
            rowsPerPage: 5,
            open: false,
        };
    }


    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        const data =
            order === 'desc'
                ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        this.setState({ data, order, orderBy });
    };

    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState({ selected: this.state.data.map(n => n.id) });
            return;
        }
        this.setState({ selected: [] });
    };

    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);

        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({ selected: newSelected });
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;


    handleDeleteUsers = () => {
        let idsToBeDeleted = this.state.selected;
        for(let i=0; i < idsToBeDeleted.length; i++){
            this.props.deleteUser(idsToBeDeleted[i]);
            // console.log(idsToBeDeleted[i]+ " a fost sters.");
        }
        if(this.props.userRole === 1){
            this.props.getUsersData(1);
            this.props.getUsersData(2);
            this.props.getUsersData(3);

        }
        this.setState({selected: []});


    };


    handleEditUser = () => {
        let selectedId= this.state.selected;
        this.props.getUser(selectedId);
        this.setState({open: true});
        console.log(this.state.selected[0]);
    };



    handleCloseModal = () => {
        this.setState({ open: false,
            selected: []});
    };

    // componentDidMount(){
    //     if(this.props.userRole === 1){
    //         this.props.getUsersData(1);
    //         this.props.getUsersData(2);
    //         this.props.getUsersData(3);
    //
    //     }
    // }

    componentWillReceiveProps(nextProps, nextContext){

    }




    render() {
        const { classes } = this.props;
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar numSelected={selected.length} handleDeleteUsers={this.handleDeleteUsers} />
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={this.handleSelectAllClick}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                        />
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                const isSelected = this.isSelected(n.id);
                                return (
                                    <TableRow
                                        hover
                                        onClick={event => this.handleClick(event, n.id)}
                                        role="checkbox"
                                        aria-checked={isSelected}
                                        tabIndex={-1}
                                        key={n.id}
                                        selected={isSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={isSelected} />
                                        </TableCell>
                                        <TableCell padding="none">{n.username}</TableCell>
                                        <TableCell numeric>{n.firstName} {n.lastName}</TableCell>
                                        <TableCell numeric>{n.createdAt}</TableCell>
                                        <TableCell numeric>{n.updatedAt}</TableCell>
                                        <TableCell padding="checkbox">
                                            <IconButton variant="fab" color="primary" aria-label="edit" onClick={this.handleEditUser}>
                                                <ModeEdit/>
                                            </IconButton>

                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    colSpan={6}
                                    count={data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    backIconButtonProps={{
                                        'aria-label': 'Previous Page',
                                    }}
                                    nextIconButtonProps={{
                                        'aria-label': 'Next Page',
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                    <EditUser
                        open={this.state.open}
                        closeModal={this.handleCloseModal}
                        handleChange={this.props.handleChange}
                        updateUser={this.props.updateUser}
                        selectedId={this.state.selected}

                        defaultUsername={this.props.defaultUsername}
                        defaultFirstName={this.props.defaultFName}
                        defaultLastName={this.props.defaultLName}

                        editedUsername={this.props.editedUsername}
                        editedFName={this.props.editedFName}
                        editedLName={this.props.editedLName}
                    />
                </div>
            </Paper>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);