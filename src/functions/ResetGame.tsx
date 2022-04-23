import { Dispatch, SetStateAction } from "react";
import { BubbleState } from "../context/BubbleStateContext";
import ShowBubbles from "./showBubbles";


export function resetGame(setBubbleState : Dispatch<SetStateAction<BubbleState>>, setBubbleTextState : Dispatch<SetStateAction<string>>) {

    const MAX = 100;

    setBubbleTextState("maybe next time..");
    ShowBubbles("#3f3f3f", "white");

    setTimeout(() => {
        setBubbleState({
            guess: Math.floor(Math.random() * MAX),
            min: 0,
            max: MAX,
            counter: 1,
        });
        let doc = (document.querySelector(".start-tab") as HTMLElement);
        doc.style.display = "flex";
    },500);
}