import React from 'react';
import { connect } from 'react-redux';
// import { add, decrement, increment, sub } from '../../actions/counter';
import * as counterActions from '../../actions/counter';

const CounterActions = (props) => {
    return (
        <div>
            <h1>{ props.someCounterValue }</h1>

            <button onClick={() => {props.onIncrement()}}> + </button>
            &nbsp;
            <button onClick={() => {props.onDecrement()}}> - </button>
            &nbsp;
            <button onClick={() => {props.onAdd(10)}}> +10  </button>
            &nbsp;
            <button onClick={() => {props.onSub(10)}}> -10 </button>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
      someCounterValue: state.counter.counter,
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(counterActions.increment()),
        onDecrement: () => dispatch(counterActions.decrement()),
        onAdd: (value) => dispatch(counterActions.add(value)),
        onSub: (value) => dispatch(counterActions.sub(value)),
    }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(CounterActions);

export default withConnect;