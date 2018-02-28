import React from 'react';
import { connect } from 'react-redux';

const CounterDetails = (props) => {
    return (
        <div>
            <h1>Counter value: {props.counterFromRedux}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counterFromRedux: state.counter.counter,
    }
};

const withConnect = connect(mapStateToProps, null)(CounterDetails);

export default withConnect;