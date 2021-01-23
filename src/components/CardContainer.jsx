import React  from "react";
import Card from "./Card";

const CardContainer = (props) => {

    const container = {
        boxSizing: 'border-box',
        height: '150px',
        width: '100px',
        margin: '5px',
        borderStyle: 'solid',
        borderRadius: '10px',
        backgroundColor: 'green' && props.backgroundColor,
    };

    return <div style={container}>
        {props.cards.map((card, index) => {
            if (card !== null)
                return <Card
                    key={card.toString().concat(index)}
                card={card}
                gameState={props.gameState}
                setGameState={props.setGameState}
            />;
            else return null;
        },)}
    </div>;
};
export default CardContainer;