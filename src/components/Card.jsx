import React, {useState} from "react";

const Card = (props) => {
    const [bordercolor, setBorderColor] = useState(false);
    const cardStyle = {
        height: '100%',
        width: '100%',
        padding: '5px',
        margin: '5px',
        borderStyle: 'solid',
        borderWidth: bordercolor ? '5px' : '2px',
        borderColor: bordercolor ? 'green' : 'black',
        borderRadius: '10px',
        backgroundColor: 'blue' && props.backgroundColor,
    };
    const cardLabelStyle = {
        color: props.color,
        position: 'relative',
        left: '0',
        top: '0'
    };
    const clickHandler = () =>{
      setBorderColor(!bordercolor);
      //props.setCardPickedUp({suit: props.suit, value: props.value});
    };
    return <div style={cardStyle}
                onClick={clickHandler}>
        <div style={cardLabelStyle}>{props.card.value}{props.card.color}{props.card.suit}</div>
    </div>;
};
export default Card;