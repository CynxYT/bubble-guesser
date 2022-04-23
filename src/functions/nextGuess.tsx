import { Dispatch, SetStateAction } from "react";
import { BubbleState } from "../context/BubbleStateContext";
import transitionCoverText from "./transitionCoverText";

export function nextGuess(guessLower : boolean, bubbleState : BubbleState, setBubbleState : Dispatch<SetStateAction<BubbleState>>) {

    transitionCoverText();

    setTimeout(() => {
        setBubbleState({
            guess: guessLower ? 
                Math.floor(Math.random() * (bubbleState.guess - bubbleState.min) + bubbleState.min) : 
                Math.floor(Math.random() * (bubbleState.max - bubbleState.guess) + (bubbleState.guess + 1)),
            min: guessLower ? bubbleState.min : bubbleState.guess + 1,
            max: guessLower ? bubbleState.guess - 1 : bubbleState.max,
            counter: bubbleState.counter + 1,
        });
    }, 200);
}