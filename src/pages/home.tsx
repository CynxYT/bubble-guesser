import React, { useState } from "react";




export default function Home() {

    const[guessInt, setGuess] = useState(7);
    const[min, setMin] = useState(0);
    const[max, setMax] = useState(100);
    const[guessCount, setCount] = useState(0);

    function guessLower() {
        let newMax = guessInt - 1;
        setMax(guessInt - 1);

        setGuess(Math.floor(Math.random() * (newMax - min + 1)) + min);
        setCount(guessCount + 1);
    }
    
    function guessHigher() {
        let newMin = guessInt + 1;
        setMin(guessInt + 1);
        setGuess(Math.floor(Math.random() * (max - newMin + 1)) + newMin);
        setCount(guessCount + 1);
    }

    function correctGuess() {
        alert("ayye I did it! - took me " + guessCount + " guesses.");
        setGuess(0);
        setMin(0)
        setMax(100);
        setCount(0);
    }

    return(
        <div className="home-container">
            <div className="guess-int-container">
                <p>{guessInt}</p>
            </div>

            <div className="button-section">
                {/* <button><p>Way lower</p></button> */}
                <button onClick={guessLower}><p>lower</p></button>
                <button onClick={correctGuess}><p>you guessed it!</p></button>
                <button onClick={guessHigher}><p>higher</p></button>
                {/* <button><p>Way higher</p></button> */}
            </div>

            <button className="information-button">i</button>
        </div>
    );
}