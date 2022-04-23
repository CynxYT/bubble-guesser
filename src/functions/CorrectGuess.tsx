import { Dispatch, SetStateAction } from "react";
import { BubbleState } from "../context/BubbleStateContext";
import ShowBubbles from "./ShowBubbles";


export function CorrectGuess(bubbleState : BubbleState, setBubbleState : Dispatch<SetStateAction<BubbleState>>, setBubbleTextState : Dispatch<SetStateAction<string>>) {

    const MAX = 100;
    
    let guessString = (bubbleState.counter === 1 ? " guess!!" : (bubbleState.counter < 9 ? " guesses!" : " guesses..."));
    let introString = (bubbleState.counter < 5 ? "wow, took me " : (bubbleState.counter < 9 ? "ayye, " : "eh..., "));
    
    setBubbleTextState(introString + bubbleState.counter + guessString);
    ShowBubbles("#3f3f3f", "white");

    setTimeout(() => {
        setBubbleState({
            guess: Math.floor(Math.random() * MAX),
            min: 0,
            max: MAX,
            counter: 1,
        })
        let doc = (document.querySelector(".start-tab") as HTMLElement);
        doc.style.display = "flex";
        (document.querySelector(".start-button") as HTMLElement).focus();
    }, 2500);
}
