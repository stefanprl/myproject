import React from 'react';
import Snackbar from 'material-ui/Snackbar';

function SnackDialog(props) {
    return (
        <Snackbar
            open={props.open}
            onClose={props.handleCloseSnack}
            transition={props.transition}
            SnackbarContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{props.snackText}</span>}
        />
    );
}

export default SnackDialog;