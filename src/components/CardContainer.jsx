import React, {useState} from "react";

const CardContainer = (props) => {
    const cardStack = [{suit: props.suit, value: null}];
    const [cardsInContainer, setCardsInContainer] = useState(cardStack);
    const [bordercolor, setBorderColor] = useState(false);

    const cardStyle = {
        height: '150px',
        width: '100px',
        padding: '5px',
        margin: '5px',
        borderStyle: 'solid',
        borderWidth: bordercolor ? '5px' : '2px',
        borderColor: bordercolor ? 'red' : 'black',
        borderRadius: '10px',
        backgroundColor: 'green' && props.backgroundColor,
    };
    const cardLabelStyle = {
        color: props.color,
        position: 'relative',
        left: '0',
        top: '0'
    };
    const clickHandler = () => {
        const currentStack = [...cardsInContainer].pop();
        if (currentStack.value === null
            && currentStack + 1 !== props.cardPickedUp.value
            && currentStack.suit !== props.cardPickedUp.suit) {
            setBorderColor(!bordercolor);
        } else {
            setCardsInContainer(cardsInContainer.push(props.cardPickedUp))
        }
    };
    return <div style={cardStyle}
                onClick={clickHandler}>
        {console.table(cardsInContainer)}
        <div style={cardLabelStyle}>{props.containerFor}</div>
    </div>;
};
export default CardContainer;