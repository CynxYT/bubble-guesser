import React from "react";


export default function CheckScreenSize() {
    document.onfullscreenchange = () => {
        let doc3 = document.querySelector(".guess-int") as HTMLElement;
        if (window.innerWidth > 1000) {
            doc3.style.height = "45vh";
        } else {
            doc3.style.height = "40vh";
        }
    }

}