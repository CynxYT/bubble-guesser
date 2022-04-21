import { Dispatch, SetStateAction } from "react";
import { BubbleState } from "../context/BubbleStateContext";
import TransitionCoverText from "./TransitionCoverText";

export function NextGuess(guessLower : boolean, bubbleState : BubbleState, setBubbleState : Dispatch<SetStateAction<BubbleState>>) {

    TransitionCoverText();

    setTimeout(() => {
        setBubbleState({
            guess: guessLower ? 
                Math.floor(Math.random() * (bubbleState.guess - bubbleState.min)) + bubbleState.min : 
                Math.floor(Math.random() * (bubbleState.max - (bubbleState.guess - 1))) + (bubbleState.guess),
            min: guessLower ? bubbleState.min : bubbleState.guess - 1,
            max: guessLower ? bubbleState.guess - 1 : bubbleState.max,
            counter: bubbleState.counter + 1,
        })
    }, 200);
}