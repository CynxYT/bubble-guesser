import React, { useEffect, useState } from "react";




export default function Home() {

    const[guessInt, setGuess] = useState(Math.floor(Math.random() * 100));
    const[min, setMin] = useState(0);
    const[max, setMax] = useState(100);
    const[guessCount, setCount] = useState(0);
    const[showInfo, setInfo] = useState(false);
    const[infoClasses, setInfoClasses] = useState("info-tab-container");

    useEffect(() => {
        if (!showInfo) {
            setInfoClasses("info-tab-container");
        } else {
            setInfoClasses("info-tab-container show-info-tab");
        }
    }, [showInfo]);

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
        setGuess(Math.floor(Math.random() * 100));
        setMin(0)
        setMax(100);
        setCount(0);
        let doc = (document.querySelector(".start-tab") as HTMLElement);
        doc.style.display = "flex";
    }

    function startGame() {
        let doc = (document.querySelector(".start-tab") as HTMLElement);
        doc.style.display = "none";
    }

    return(
        <div className="home-container">
            <div className="guess-int-container">
                <div className="guess-int">
                    <h1>{guessInt}</h1>
                </div>
            </div>

            <div className="button-section">
                <div className="button-inner-section lower-section">
                    <button onClick={guessLower}><p>LOWER</p></button>
                </div>

                <div className="button-inner-section red-section">
                    <div  className="red-button-section">
                        <div className="top-red"><p>{"<-"}</p></div>
                        <div onClick={correctGuess}><p>DONE!</p></div>
                    </div>
                </div>

                <div className="button-inner-section higher-section">
                    <button onClick={guessHigher}><p>HIGHER</p></button>
                </div>
            </div>



            <button className="information-button" onClick={() => setInfo(true)}><p>i</p></button>

            <div className={infoClasses}>
                <div className="info-tab">
                    <div className="exit-button" onClick={() => setInfo(false)}><div/><div/></div>
                    <p>
                        long text
                    </p>
                    <p>developed by cynx</p>
                </div>

                <div className="back-cover"/>
            </div>

            <div className="start-tab">
                <button className="start-button" onClick={() => startGame()}><p>start</p></button>
            </div>

            {/* <div className="socials-tab">
                <div/>
                <div/>
                <div/>
            </div> */}
        </div>
    );
}