import React, {useState} from "react";
import CardContainer from "./components/CardContainer";

const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const setcard = (value, color, suit, faceUp) => {
    const card = {};
    card.value = value;
    card.color = color;
    card.suit = suit;
    card.faceUp = faceUp;
    return card
};

const deck = cardValues.map(value => setcard(value, 'red', 'hearts', false))
    .concat(cardValues.map(value => setcard(value, 'red', 'diamonds', false)))
    .concat(cardValues.map(value => setcard(value, 'black', 'spades', false)))
    .concat(cardValues.map(value => setcard(value, 'black', 'clubs', false)));



const shuffleDeck = (deckToShuffle) => {
    const wholeDeck = [...deckToShuffle];
    const randomDeck = [];
    while (randomDeck.length !== deckToShuffle.length) {
        let i = Math.floor(Math.random() * wholeDeck.length);
        randomDeck.push(wholeDeck[i]);
        wholeDeck.splice(i, 1);
    }
    return randomDeck;
};

const stateOfCards = {
    newCards: {
        closedCards: [],
        openCards: [],
    },
    finishedCards: {
        hearts: [],
        diamonds: [],
        spades: [],
        clubs: [],
    },
    playableCards: {
        col1: [],
        col2: [],
        col3: [],
        col4: [],
        col5: [],
        col6: [],
        col7: [],
    },
};

const App = () => {
        const [gameState, setGameState] = useState(stateOfCards);

        const startGame = () => {
            const newShuffledDeck = shuffleDeck([...deck]);     //gets fresh random card deck
            let i = 1;
            for (let [key] of Object.entries(gameState.playableCards)) {     //iterates over columns, fills assigned array with increasing number of cards
                const tempCardArray = [];
                while (tempCardArray.length<i){
                    tempCardArray.push(newShuffledDeck[0]);
                    newShuffledDeck.shift();
                }
                gameState.playableCards[key] = tempCardArray;
                i++;
            }
                gameState.newCards.closedCards = newShuffledDeck;               //puts remaining cards into available card spot
            setGameState({...gameState});
        };

        return <div className="App">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button style={{position: 'absolute', top: '50px', left: '50%'}} onClick={startGame}>Start</button>
                <div style={{display: 'flex'}}>
                    {Object.keys(gameState.newCards).map((newCardsSpot, index) => (
                        <CardContainer key={newCardsSpot.toString().concat(index.toString())}
                                       backgroundColor={'green'}
                                       cards={gameState.newCards[newCardsSpot]}
                                       gameState={gameState}
                                       setGameState={setGameState}/>
                    ),)}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {Object.keys(gameState.finishedCards).map((finishedCardSpot, index) => (
                        <CardContainer containerFor={finishedCardSpot}
                                       cards={gameState.finishedCards[finishedCardSpot]}
                                       key={finishedCardSpot.toString().concat(index.toString())}
                                       gameState={gameState}
                                       setGameState={setGameState}/>
                    ))}
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {Object.keys(gameState.playableCards).map((column) => (
                    <CardContainer key={column}
                                   cards={gameState.playableCards[column]}
                                   gameState={gameState}
                                   setGameState={setGameState}/>
                ),)}
            </div>
        </div>
    }
;

export default App;
