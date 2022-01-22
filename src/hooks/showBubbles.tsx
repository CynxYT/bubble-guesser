import React, { useState } from "react";



export default function showBubbles(colour : string, textColour : string) {
    
    let doc = (document.querySelector(".bubble-cover") as HTMLElement);
    let docText = (document.querySelector(".bubble-cover-text") as HTMLElement);
    doc.style.backgroundColor = colour;
    doc.style.top = "0";
    doc.style.transition = "top ease 0.5s";
    docText.style.color = textColour;
    [1,2,3].forEach((x) => {
        let localBubble = document.querySelector(".bubble-" + x) as HTMLElement;
        localBubble.style.top = "-20rem";
        localBubble.style.transition = "top ease " + Math.floor(Math.random() * 2 + 1) + "s 0." + Math.floor(Math.random() * 9) + "s";
    });






    


    
    setTimeout(() => {
        docText.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        docText.style.opacity = "0";
    }, 2400);

    setTimeout(() => {
        doc.style.top = "-100vh";

        [1,2,3].forEach((x) => {
            (document.querySelector(".bubble-" + x) as HTMLElement).style.transition = "top ease 0s 0s";
        });

    }, 3000);

    setTimeout(() => {
        doc.style.transition = "top ease 0s";

        [1,2,3].forEach((x) => {
            (document.querySelector(".bubble-" + x) as HTMLElement).style.top = "100vh";
        });

        setTimeout(() => { 
            doc.style.top = "100vh"; 
        }, 20);
        
    }, 3500);    

}