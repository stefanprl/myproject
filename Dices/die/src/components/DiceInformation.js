import React from 'react';
import {rollDie, win} from '../actions/rollDice';
import {connect} from 'react-redux';

const DiceInformation = (props) =>{
    if (props.sum >= 20) {
        alert("Ai castigat!!!");
    }

    return(
        <div>
            <h4>Press the button to roll the die</h4>
            <button onClick={() => {props.rollDie()}} disabled={props.sum>=20}>Roll die</button>
            <h3>Sum is: {props.sum} </h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        disabled: state.diceReducer.disabled,
        sum: state.diceReducer.sum,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rollDie: () => dispatch(rollDie()),
    }
};

const withConnect = connect(mapStateToProps,  mapDispatchToProps)(DiceInformation);

export default withConnect;