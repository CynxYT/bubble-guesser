import { useContext, useState } from "react";
import BubbleCover from "../components/BubbleCover";
import Bubbles from "../components/Bubbles";
import GuessScreen from "../components/GuessScreen";
import InfoTab from "../components/InfoTab";
import Noise from "../components/Noise";
import Popup from "../components/Popup";
import Socials from "../components/Socials";
import StartBubble from "../components/StartBubble";
import { BubbleStateContext } from "../context/BubbleStateContext";
import scaleItem from "../functions/scaleItem";
import setHover from "../functions/setHover";
import { StartGame } from "../functions/StartGame";




export default function Home() {

    const {bubbleState} = useContext(BubbleStateContext);

    const [bubbleWordsState, setBubbleWordsState] = useState("let's get started!");



    return(
        <div className="home-container">

            {GuessScreen(bubbleState.guess)}

            <div className="button-section">
                {/* <div className="button-inner-section lower-section">
                    <button className="lower-button" 
                        onClick={() => nextGuess(true)} 
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
                </div> */}

                {/* <div className="button-inner-section red-section">
                    <div className="red-button-section">
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
                </div> */}

                {/* <div className="button-inner-section higher-section">
                    <button className="higher-button" 
                        onClick={() => nextGuess(false)} 
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
                </div> */}
            </div>


            <InfoTab/>
           
            <div className="start-tab">
                <div className="start-button-container">
                    <button className="start-button" 
                        onClick={() => StartGame()} 
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

            {BubbleCover(bubbleWordsState)}

            <div className="background"/>

            <Popup/>

        </div>
    );
}