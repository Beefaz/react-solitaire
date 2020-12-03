import React, {useState} from "react";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";


const App = () => {
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const deckSuits = {
        hearts: {
            color: 'red',
            values: [...cardValues],
        },
        diamonds: {
            color: 'red',
            values: [...cardValues],
        },
        spades: {
            color: 'black',
            values: [...cardValues],
        },
        clubs: {
            color: 'black',
            values: [...cardValues],
        },
    };

    const [deckState, setDeckState] = useState(deckSuits);
    const [cardPickedup, setCardPickedUp] = useState({suit: null, value: null});
        return <div className="App">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <Card backgroundColor={'blue'}/>
                    <CardContainer backgroundColor={'green'}/>
                </div>
                <div style={{display: 'flex'}}>
                    {Object.keys(deckSuits).map((deckSuit) => (
                        <CardContainer key={deckSuit}
                                       containerFor={deckSuit}
                                       deckState={deckState}
                                       setDeckState={setDeckState}
                                       cardPickedUp={cardPickedup}/>
                    ),)}
                </div>
            </div>
            {Object.keys(deckSuits).map((deckSuit) => (
                <div style={{display: 'flex'}}>{deckSuits[deckSuit].values.map((cardValue, cardIndex) => (
                    <Card key={deckSuit.concat(cardValue).concat(cardIndex.toString())}
                          color={deckSuits[deckSuit].color}
                          suit={deckSuit}
                          value={cardValue}
                          cardPickedUp={cardPickedup}
                          setCardPickedUp={setCardPickedUp}/>
                ))}
                </div>
            ),)}
        </div>
};

export default App;
