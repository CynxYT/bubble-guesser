import React, { useEffect, useState } from "react";
import scaleItem from "../hooks/scaleItem";
import setHover from "../hooks/setHover";


export default function InfoTab() {

    const[infoClasses, setInfoClasses] = useState("info-tab-container");
    const[showInfo, setInfo] = useState(false);

    useEffect(() => {
        if (!showInfo) {
            setInfoClasses("info-tab-container");
        } else {
            setInfoClasses("info-tab-container show-info-tab");
        }
    }, [showInfo]);

    return(
        <>
            <button className="information-button" 
                onClick={() => setInfo(true)} 
                onMouseDown={() => scaleItem("information-button", true)} 
                onMouseUp={() => {
                    scaleItem("information-button", false);
                    setTimeout(() => {
                        setHover(false);
                    }, 400);
                }} 
                onMouseLeave={() => {
                    scaleItem("information-button", false);
                    setHover(false);
                }}
                onMouseEnter={() => setHover(true)}>
                <p>i</p>
            </button>

            <div className={infoClasses}>
                <div className="info-tab-mobile">
                    <div className="info-tab">
                        <div className="exit-button" 
                        onClick={() => setInfo(false)} 
                        onMouseUp={() => {
                            setTimeout(() => {
                                setHover(false);
                            }, 400);
                        }} 
                        onMouseLeave={() => {
                            setHover(false);
                        }}
                        onMouseEnter={() => setHover(true)}>
                            <div/>
                            <div/>
                        </div>
                        <p className="info-text">
                            {"Bubble Guesser was created as a fun side project to sharpen my skills. " + 
                            "I hope you enjoy the merits of my holiday project :)"}
                        </p>
                        <p className="info-text bottom-text">
                            {"HOW TO PLAY: Think of a number between 0 and 100. Let Bubble guess your number " + 
                            "by pressing 'HIGHER' or 'LOWER'. When displayed, press 'DONE', or press "} 
                            <span className="home-span"/>
                            {" to return to the home screen."}
                        </p>
                        <p className="dev-info">
                            {"developed by CYNX"}
                        </p>
                    </div>
                </div>

                <div className="back-cover"/>
            </div>

        </>
    )
}