import { CallBubbles } from "./CallBubbles";
import { resetBubbleState } from "./ResetBubbleState";



export function resetGame() {
    CallBubbles("#3f3f3f", "maybe next time..", "white");

    setTimeout(() => {
        resetBubbleState();
        let doc = (document.querySelector(".start-tab") as HTMLElement);
        doc.style.display = "flex";
    },500);
}