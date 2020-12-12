import React, {useState} from "react";
import Card from "./Card";

const CardContainer = (props) => {

    const container = {
        height: '150px',
        width: '100px',
        padding: '5px',
        margin: '5px',
        borderStyle: 'solid',
        borderRadius: '10px',
        backgroundColor: 'green' && props.backgroundColor,
    };

    return <div style={container}>
        {props.cards.map((card) => {
            if (props.cards.length > 1) {return <Card key={card} color={card.color} visibility={card.visibility} suit={card.suit} value={card.value}/>}
            else return null;
        },)}
    </div>;
};
export default CardContainer;