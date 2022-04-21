import React, { Dispatch, SetStateAction } from "react";
import { BubbleState } from "../context/BubbleStateContext";
import { CorrectGuess } from "../functions/CorrectGuess";
import { NextGuess } from "../functions/NextGuess";
import { resetGame } from "../functions/ResetGame";
import scaleItem from "../functions/scaleItem";
import setHover from "../functions/setHover";
import { StartGame } from "../functions/StartGame";




export default function ButtonTemplate(buttonIndex : number, bubbleState : BubbleState, setBubbleState : Dispatch<SetStateAction<BubbleState>>, bubbleTextState : string, setBubbleTextState : Dispatch<SetStateAction<string>>) {

    type ButtonInfo = {
        name: string,
        text: string,
    }

    let arr : ButtonInfo[] = [
        {
            name: "start-button",
            text: "START",
        },
        {
            name: "higher-button",
            text: "HIGHER",
        },
        {
            name: "lower-button",
            text: "LOWER",
        },
        {
            name: "top-red",
            text: "",
        },
        {
            name: "done-red",
            text: "DONE!",
        }
    ];

    function runSwitch() {
        switch(buttonIndex) {
            case 0:
                StartGame(setBubbleTextState);
                break;
            case 1:
                NextGuess(false, bubbleState, setBubbleState);
                break;
            case 2:
                NextGuess(true, bubbleState, setBubbleState);
                break;
            case 3: 
                resetGame(setBubbleState, setBubbleTextState);
                break;
            case 4: 
                CorrectGuess(bubbleState, setBubbleState, setBubbleTextState);
        }
    }

    return(
        <button className={arr[buttonIndex].name}
            onClick={runSwitch} 
            onMouseDown={() => scaleItem(arr[buttonIndex].name, true)} 
            onMouseUp={() => {
                scaleItem(arr[buttonIndex].name, false);
                setTimeout(() => {
                    setHover(false);
                }, 100);
            }} 
            onMouseLeave={() => {
                scaleItem(arr[buttonIndex].name, false);
                setHover(false);
            }}
            onMouseEnter={() => setHover(true)}>
            {buttonIndex === 3 ? <div/> : <p>{arr[buttonIndex].text}</p>}
        </button>
    );

}