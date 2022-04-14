import { useContext } from "react";
import { BubbleStateContext } from "../context/BubbleStateContext";


export function resetBubbleState() {

    const MAX = 100;

    const {setBubbleState} = useContext(BubbleStateContext);

    setBubbleState({
        guess: Math.floor(Math.random() * MAX),
        min: 0,
        max: MAX,
        counter: 1,
    })
}