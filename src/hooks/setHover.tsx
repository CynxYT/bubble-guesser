import React from "react";



export default function setHover(onHover : boolean) {
    let container = (document.querySelector(".cursor-container") as HTMLElement);


    if (onHover) {
        container.classList.add("cursor-hover");
    } else {
        container.classList.remove("cursor-hover");
    }

}