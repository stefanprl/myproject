import React from 'react';
import animation from '../media/animated-dice.gif';
import dice1 from '../media/dice1.png';
import dice2 from '../media/dice2.png';
import dice3 from '../media/dice3.png';
import dice4 from '../media/dice4.png';
import dice5 from '../media/dice5.png';
import dice6 from '../media/dice6.png';
import {connect} from "react-redux";



const DiceAnimation = (props) => {
    return (
        <div>
            {props.dieNumber === 1 && <img src={dice1} alt="zar"/> }
            {props.dieNumber === 2 && <img src={dice2} alt="zar"/> }
            {props.dieNumber === 3 && <img src={dice3} alt="zar"/> }
            {props.dieNumber === 4 && <img src={dice4} alt="zar"/> }
            {props.dieNumber === 5 && <img src={dice5} alt="zar"/> }
            {props.dieNumber === 6 && <img src={dice6} alt="zar"/> }
            {props.dieNumber === null && <img src={animation} alt="zar"/> }
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        dieNumber: state.diceReducer.dieNumber,
    }
};

const withConnect = connect(mapStateToProps, null)(DiceAnimation);

export default withConnect;