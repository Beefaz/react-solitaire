import React, {useState} from "react";

const Card = (props) => {
    const [bordercolor, setBorderColor] = useState(false);
    const stackDeck = () => {
        if (props.expanded === true) return {top: props.index*35};
        else return {top:'0'}
    };
    const cardStyle = {
        boxSizing: 'border-box',
        position:'absolute',
        height: '100%',
        width: '100%',
        padding: '5px',
        borderStyle: 'solid',
        borderWidth: bordercolor ? '5px' : '2px',
        borderColor: bordercolor ? 'green' : 'black',
        borderRadius: '10px',
        backgroundColor: 'white' || props.backgroundColor,
        ...stackDeck(),
    };

    const cardLabelStyle = {
        color: props.card.color,
    };
    const clickHandler = (bool) => {
        console.log(bool);
        console.log(bordercolor);
        setBorderColor(!bordercolor&&bool);
        //props.setCardPickedUp({suit: props.suit, value: props.value});
    };
    return <div style={cardStyle}
                onMouseEnter={event => clickHandler(true)} onMouseLeave={event => clickHandler(false)} onClick={event => clickHandler(true)}>
        <div style={cardLabelStyle}>{props.card.value}{props.card.color}{props.card.suit}</div>
    </div>;
};
export default Card;