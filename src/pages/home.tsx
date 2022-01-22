import { useState } from "react";
import Bubbles from "../components/Bubbles";
import InfoTab from "../components/InfoTab";
import scaleItem from "../hooks/scaleItem";
import showBubbles from "../hooks/showBubbles";




export default function Home() {

    const[guessInt, setGuess] = useState(Math.floor(Math.random() * 100));
    const[min, setMin] = useState(0);
    const[max, setMax] = useState(100);
    const[guessCount, setCount] = useState(1);
    const[bubbleWord, setBubbleWords] = useState("let's get started!");



    function guessLower() {
        transitionText();
        
        setTimeout(() => {
            let newMax = guessInt - 1;
            setMax(guessInt - 1);
            setGuess(Math.floor(Math.random() * (newMax - min + 1)) + min);
            setCount(guessCount + 1);
        }, 200);
    }
    
    function guessHigher() {
        transitionText();

        setTimeout(() => {
            let newMin = guessInt + 1;
            setMin(guessInt + 1);
            setGuess(Math.floor(Math.random() * (max - newMin + 1)) + newMin);
            setCount(guessCount + 1);
        }, 250);
    }

    function transitionText() {
        let doc = document.querySelector(".guess-int-number") as HTMLElement;

        doc.style.opacity = "0";

        setTimeout(() => {
            doc.style.opacity = "1";
        }, 300);
    }

    function correctGuess() {
        callBubbles("#3f3f3f", "wow, took me " + guessCount + " guesses..", "white");

        setTimeout(() => {
            setGuess(Math.floor(Math.random() * 100));
            setMin(0)
            setMax(100);
            setCount(0);
            let doc = (document.querySelector(".start-tab") as HTMLElement);
            doc.style.display = "flex";
        }, 500);
    }

    function callBubbles(x : string, y : string, z : string) {
        setBubbleWords(y);
        showBubbles(x,z);
    }

    function startGame() {
        callBubbles("#d47fad", "let's get started!", "black");

        let doc2 = document.querySelector(".guess-int-number") as HTMLElement;
        doc2.style.opacity = "0";

        setTimeout(() => {
            let doc = (document.querySelector(".start-tab") as HTMLElement);
            doc.style.display = "none";

            setTimeout(() => {
                doc2.style.opacity = "1";
            }, 3000); //time to show first guess
        }, 500);
    }

    function resetGame() {
        callBubbles("#3f3f3f", "okayyy, maybe next time..", "white");

        setTimeout(() => {
            setGuess(Math.floor(Math.random() * 100));
            setMin(0)
            setMax(100);
            setCount(0);
            let doc = (document.querySelector(".start-tab") as HTMLElement);
            doc.style.display = "flex";
        },500);
    }

    // const scaleItem = (classname : string, scaleDown : boolean) => {
    //     if (scaleDown) {
    //         (document.querySelector("." + classname) as HTMLElement).style.transform = "scale(0.97)";
    //     }
    //     else {
    //         (document.querySelector("." + classname) as HTMLElement).style.transform = "scale(1)";
    //     }
    // }

    return(
        <div className="home-container">
            <div className="guess-int-container">
                <div className="guess-int">
                    <h1 className="guess-int-number">{guessInt}</h1>
                </div>
            </div>

            <div className="button-section">
                <div className="button-inner-section lower-section">
                    <button className="lower-button" onClick={guessLower} onMouseDown={() => scaleItem("lower-button", true)} onMouseUp={() => scaleItem("lower-button", false)}><p>LOWER</p></button>
                </div>

                <div className="button-inner-section red-section">
                    <div  className="red-button-section">
                        <button className="top-red" onClick={resetGame} onMouseDown={() => scaleItem("top-red", true)} onMouseUp={() => scaleItem("top-red", false)}><p>{"<-"}</p></button>
                        <button className="done-red" onClick={correctGuess} onMouseDown={() => scaleItem("done-red", true)} onMouseUp={() => scaleItem("done-red", false)}><p>DONE!</p></button>
                    </div>
                </div>

                <div className="button-inner-section higher-section">
                    <button className="higher-button" onClick={guessHigher} onMouseDown={() => scaleItem("higher-button", true)} onMouseUp={() => scaleItem("higher-button", false)}><p>HIGHER</p></button>
                </div>
            </div>


            <InfoTab/>
           
            <div className="start-tab">
                <button className="start-button" onClick={() => startGame()} onMouseDown={() => scaleItem("start-button", true)} onMouseUp={() => scaleItem("start-button", false)}><p>START</p></button>
            </div>

            <Bubbles/>

            <div className="bubble-cover">
                <p className="bubble-cover-text">{bubbleWord}</p>
            </div>
        </div>
    );
}