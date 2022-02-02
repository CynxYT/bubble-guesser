import React, { useEffect } from "react";



export default function Popup() {

    useEffect(() => {
        setTimeout(() => {
            let popup = (document.querySelector(".popup-container") as HTMLElement);
            popup.style.opacity = "1";
            popup.style.pointerEvents = "all";
        }, 3800);
    }, []);


    function closePopup() {
        let popup = (document.querySelector(".popup-container") as HTMLElement);
        popup.style.opacity = "0";
        popup.style.pointerEvents = "none";
    }

    return (
        <div className="popup-container">

            <div className="popup-tab">
                <div className="exit-button" onClick={() => closePopup()}>
                    <div/>
                    <div/>
                </div>

                <p className="top-popup-text">
                    {"HOW TO PLAY: Think of a number between 0 and 100. Let Bubble guess your number " + 
                    "by pressing 'HIGHER' or 'LOWER'. When displayed, press 'DONE', or press "} 
                    <span>
                        <div className="home-span"/>
                    </span>
                    {" to return to the home screen."}
                </p>

                <p>
                    Alright, that's it, enjoy! :)
                </p>


                </div>
        </div>
    );
}