import { useContext } from "react";
import { BubbleStateContext } from "../context/BubbleStateContext";
import { CallBubbles } from "./CallBubbles";
import { resetBubbleState } from "./ResetBubbleState";


export function correctGuess() {
    const {bubbleState} = useContext(BubbleStateContext);

    
    let guessString = (bubbleState.counter === 1 ? " guess!!" : (bubbleState.counter < 9 ? " guesses!" : " guesses..."));
    let introString = (bubbleState.counter < 5 ? "wow, took me " : (bubbleState.counter < 9 ? "ayye, " : "eh..., "));
    
    CallBubbles("#3f3f3f", introString + bubbleState.counter + guessString, "white");

    setTimeout(() => {
        resetBubbleState();
        let doc = (document.querySelector(".start-tab") as HTMLElement);
        doc.style.display = "flex";
        (document.querySelector(".start-button") as HTMLElement).focus();
    }, 2500);
}
