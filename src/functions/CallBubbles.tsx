import { useContext } from "react";
import { BubbleStateContext } from "../context/BubbleStateContext";
import { BubbleTextStateContext } from "../context/BubbleTextStateContext";
import showBubbles from "./showBubbles";


export function CallBubbles(x : string, y : string, z : string) {

    const { bubbleTextState, setBubbleTextState} = useContext(BubbleTextStateContext);

    setBubbleTextState(y);
    showBubbles(x,z);
}