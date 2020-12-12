import React, {useState} from "react";
import CardContainer from "./components/CardContainer";


const App = () => {
        const cardArrays = {
            newCards: {
                closedCards: [0],
                visibleCards: [0],
            },
            finishedCards: {
                hearts: [0],
                diamonds: [0],
                spades: [0],
                clubs: [0],
            },
            playableCards: {
                col1: [0],
                col2: [0],
                col3: [0],
                col4: [0],
                col5: [0],
                col6: [0],
            },
        };

        const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        const setcard = (value, color, suit, visibility) => {
            const card = {};
            card.value = value;
            card.color = color;
            card.suit = suit;
            card.visibility = visibility;
            return card
        };

        const deck = cardValues.map(value => setcard(value, 'red', 'hearts', true))
            .concat(cardValues.map(value => setcard(value, 'red', 'diamonds', true)))
            .concat(cardValues.map(value => setcard(value, 'black', 'spades', true)))
            .concat(cardValues.map(value => setcard(value, 'black', 'clubs', true)));

        const [gamestate, setGamestate] = useState({...cardArrays});

        return <div className="App">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <CardContainer backgroundColor={'green'} cards={gamestate.newCards.closedCards}/>
                    <CardContainer backgroundColor={'green'} cards={gamestate.newCards.visibleCards}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <CardContainer containerFor={'hearts'} cards={gamestate.finishedCards.hearts}/>
                    <CardContainer containerFor={'diamonds'} cards={gamestate.finishedCards.diamonds}/>
                    <CardContainer containerFor={'spades'} cards={gamestate.finishedCards.spades}/>
                    <CardContainer containerFor={'clubs'} cards={gamestate.finishedCards.clubs}/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {Object.keys(cardArrays.playableCards).map((container) => (
                    <CardContainer key={container} cards={gamestate.playableCards[container]}/>
                ),)}
            </div>
        </div>
    }
;

export default App;
