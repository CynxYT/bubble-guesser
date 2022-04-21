import { Dispatch, SetStateAction } from "react";
import showBubbles from "./showBubbles";


export function StartGame(setBubbleTextState: Dispatch<SetStateAction<string>>) {

    setBubbleTextState("are you ready?");
    showBubbles("#d47fad", "black")

    let doc2 = document.querySelectorAll(".guess-int, .lower-button, .higher-button, .top-red, .done-red") as NodeListOf<HTMLElement>;
    let doc3 = document.querySelector(".guess-int") as HTMLElement;

    doc2.forEach((x) => {
        x.style.opacity = "0";
    })
    doc3.style.height = "35vh";

    setTimeout(() => {
        let doc = (document.querySelector(".start-tab") as HTMLElement);
        doc.style.display = "none";

        setTimeout(() => {
            doc2.forEach((x) => {
                x.style.opacity = "1";
            })

            if (window.innerWidth > 800) {
                doc3.style.height = "45vh";
            } else {
                doc3.style.height = "40vh";
            }
        }, 2600); //time to show first guess
    }, 500);
}
