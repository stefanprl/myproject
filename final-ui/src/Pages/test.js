import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

class TestWithParams extends Component {
    componentDidMount() {
        const { match } = this.props;
        const id = match.params.jobId;

        console.log('THE ID', id);

        // const isLoggedIn = false;
        //
        // if (!isLoggedIn) {
        //     this.props.goToTest();
        // }
        // ToDo dispatch action get by id, send this id to the action
    }

    goToTest = () => {
        this.props.goToTest();
    };

    render() {
        return (
            <div>
                <h1>Test with params</h1>

                <Button color="inherit" onClick={this.goToTest}>
                    OnClick
                </Button>

                <Button color="inherit" component={Link} to="/jobs">
                    Jons
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToTest: () => dispatch(push('/jobs')),
});

export default connect(null, mapDispatchToProps)(TestWithParams);