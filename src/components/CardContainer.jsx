import React  from "react";
import Card from "./Card";

const CardContainer = (props) => {
    const container = {
        position: 'relative',
        boxSizing: 'border-box',
        height: '175px',
        width: '125px',
        margin: '5px',
        borderStyle: 'solid',
        borderRadius: '10px',
        backgroundColor: 'green' && props.backgroundColor,
    };

    return <div style={container}>
        {props.cards.map((card, index) => {
            if (card !== null)
                return <Card
                    expanded={props.expanded}
                    key={card.toString().concat(index)}
                    index={index}
                card={card}
                gameState={props.gameState}
                setGameState={props.setGameState}
            />;
            else return null;
        },)}
    </div>;
};
export default CardContainer;