import { Dispatch, SetStateAction } from "react";
import { BubbleState } from "../context/BubbleStateContext";
import { correctGuess } from "../functions/correctGuess";
import { nextGuess } from "../functions/nextGuess";
import { resetGame } from "../functions/resetGame";
import scaleItem from "../functions/scaleItem";
import { startGame } from "../functions/startGame";




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
                startGame(setBubbleTextState);
                break;
            case 1:
                nextGuess(false, bubbleState, setBubbleState);
                break;
            case 2:
                nextGuess(true, bubbleState, setBubbleState);
                break;
            case 3: 
                resetGame(setBubbleState, setBubbleTextState);
                break;
            case 4: 
                correctGuess(bubbleState, setBubbleState, setBubbleTextState);
        }
    }

    return(
        <button className={arr[buttonIndex].name}
            onClick={runSwitch} 
            onMouseDown={() => scaleItem(arr[buttonIndex].name, true)} 
            onMouseUp={() => scaleItem(arr[buttonIndex].name, false)} 
            onMouseLeave={() => scaleItem(arr[buttonIndex].name, false)}>
            {buttonIndex === 3 ? <div/> : <p>{arr[buttonIndex].text}</p>}
        </button>
    );

}