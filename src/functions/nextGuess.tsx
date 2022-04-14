import { useContext } from "react";
import { BubbleStateContext } from "../context/BubbleStateContext";
import TransitionCoverText from "./TransitionCoverText";

function nextGuess(guessLower : boolean) {
    const {bubbleState, setBubbleState} = useContext(BubbleStateContext);

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