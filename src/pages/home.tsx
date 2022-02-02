import { useState } from "react";
import Bubbles from "../components/Bubbles";
import InfoTab from "../components/InfoTab";
import Noise from "../components/Noise";
import Popup from "../components/Popup";
import Socials from "../components/Socials";
import StartBubble from "../components/StartBubble";
import scaleItem from "../hooks/scaleItem";
import setHover from "../hooks/setHover";
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
        let guessString = (guessCount === 1 ? " guess!!" : (guessCount < 9 ? " guesses!" : " guesses..."));
        let introString = (guessCount < 5 ? "wow, took me " : (guessCount < 9 ? "ayye, " : "eh..., "));
        callBubbles("#3f3f3f", introString + guessCount + guessString, "white");

        setTimeout(() => {
            setGuess(Math.floor(Math.random() * 100));
            setMin(0)
            setMax(100);
            setCount(1);
            let doc = (document.querySelector(".start-tab") as HTMLElement);
            doc.style.display = "flex";
        }, 2500);
    }

    function callBubbles(x : string, y : string, z : string) {
        setBubbleWords(y);
        showBubbles(x,z);
    }

    function startGame() {
        callBubbles("#d47fad", "are you ready?", "black");

        let doc2 = document.querySelectorAll(".guess-int, .lower-button, .higher-button, .top-red, .done-red") as NodeListOf<HTMLElement>;
        let doc3 = document.querySelector(".guess-int") as HTMLElement;

        doc2.forEach((x) => {
            x.style.opacity = "0";
        })
        doc3.style.height = "35vh";

        setTimeout(() => {
            let doc = (document.querySelector(".start-tab") as HTMLElement);
            doc.style.display = "none";

            setTimeout(() => {
                doc2.forEach((x) => {
                    x.style.opacity = "1";
                })
                if (window.screen.availWidth > 800) {
                    doc3.style.height = "45vh";
                } else {
                    doc3.style.height = "40Cvh";
                }
                
        
            }, 2600); //time to show first guess
        }, 500);
    }

    function resetGame() {
        callBubbles("#3f3f3f", "maybe next time..", "white");

        setTimeout(() => {
            setGuess(Math.floor(Math.random() * 100));
            setMin(0)
            setMax(100);
            setCount(1);
            let doc = (document.querySelector(".start-tab") as HTMLElement);
            doc.style.display = "flex";
        },500);
    }

    return(
        <div className="home-container">

            <div className="guess-int-container">
                <div className="guess-int">
                    <h1 className="guess-int-number">{guessInt}</h1>
                </div>
            </div>

            <div className="button-section">
                <div className="button-inner-section lower-section">
                    <button className="lower-button" 
                        onClick={guessLower} 
                        onMouseDown={() => scaleItem("lower-button", true)} 
                        onMouseUp={() => {
                            scaleItem("lower-button", false);
                            setTimeout(() => {
                                setHover(false);
                            }, 100);
                        }} 
                        onMouseLeave={() => {
                            scaleItem("lower-button", false);
                            setHover(false);
                        }}
                        onMouseEnter={() => setHover(true)}>
                        <p>LOWER</p>
                    </button>
                </div>

                <div className="button-inner-section red-section">
                    <div  className="red-button-section">
                        <button className="top-red" 
                            onClick={resetGame} 
                            onMouseDown={() => scaleItem("top-red", true)} 
                            onMouseUp={() => {
                                scaleItem("top-red", false);
                                setTimeout(() => {
                                    setHover(false);
                                }, 100);
                            }} 
                            onMouseLeave={() => {
                                scaleItem("top-red", false);
                                setHover(false);
                            }}
                            onMouseEnter={() => setHover(true)}>
                            <div/>
                        </button>
                        <button className="done-red" 
                            onClick={correctGuess} 
                            onMouseDown={() => scaleItem("done-red", true)} 
                            onMouseUp={() => {
                                scaleItem("done-red", false);
                                setTimeout(() => {
                                    setHover(false);
                                }, 100);
                            }} 
                            onMouseLeave={() => {
                                scaleItem("done-red", false);
                                setHover(false);
                            }}
                            onMouseEnter={() => setHover(true)}>
                            <p>DONE!</p>
                        </button>
                    </div>
                </div>

                <div className="button-inner-section higher-section">
                    <button className="higher-button" 
                        onClick={guessHigher} 
                        onMouseDown={() => scaleItem("higher-button", true)} 
                        onMouseUp={() => {
                            scaleItem("higher-button", false);
                            setTimeout(() => {
                                setHover(false);
                            }, 100);
                        }} 
                        onMouseLeave={() => {
                            scaleItem("higher-button", false);
                            setHover(false);
                        }}
                        onMouseEnter={() => setHover(true)}>
                        <p>HIGHER</p>
                    </button>
                </div>
            </div>


            <InfoTab/>
           
            <div className="start-tab">
                <div className="start-button-container">
                    <button className="start-button" 
                        onClick={() => startGame()} 
                        onMouseDown={() => scaleItem("start-button", true)} 
                        onMouseUp={() => {
                            scaleItem("start-button", false);
                            setTimeout(() => {
                                setHover(false);
                            }, 400);
                        }} 
                        onMouseLeave={() => {
                            scaleItem("start-button", false);
                            setHover(false);
                        }}
                        onMouseEnter={() => setHover(true)}>
                        <p>START</p>
                    </button>
                </div>
                <Socials/>
                <StartBubble/>
            </div>

            <Bubbles/>

            <Noise/>

            <Popup/>

            <div className="bubble-cover">
                <p className="bubble-cover-text">{bubbleWord}</p>
            </div>

            <div className="background"/>

        </div>
    );
}