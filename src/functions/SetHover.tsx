

export default function SetHover(isHover : boolean, initial : boolean) {

    let mainCursor = (document.querySelector(".main-cursor-background") as HTMLElement);
    let secondaryCursor = (document.querySelector(".secondary-cursor-background") as HTMLElement);

    if (initial) return;

    if (isHover) {
        mainCursor.classList.add("main-cursor-hover");
        secondaryCursor.classList.add("secondary-cursor-hover");
    } else {
        mainCursor.classList.remove("main-cursor-hover");
        secondaryCursor.classList.remove("secondary-cursor-hover");
    }
}