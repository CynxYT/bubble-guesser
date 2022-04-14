import React from "react";


export default function GuessScreen(guess : number) {

    return (
        <div className="guess-int-container">
            <div className="guess-int">
                <h1 className="guess-int-number">{guess}</h1>
            </div>
        </div>
    );
}