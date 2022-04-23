
export default function transitionCoverText() {
    let doc = document.querySelector(".guess-int-number") as HTMLElement;
    doc.style.opacity = "0";

    setTimeout(() => {
        doc.style.opacity = "1";
    }, 300);
}