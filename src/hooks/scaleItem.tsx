
export default function scaleItem(classname : string, scaleDown : boolean) {
    if (scaleDown) {
        (document.querySelector("." + classname) as HTMLElement).style.transform = (classname === "information-button" ? "scale(0.9)" : "scale(0.97)");
    }
    else {
        (document.querySelector("." + classname) as HTMLElement).style.transform = "scale(1)";
    }
}