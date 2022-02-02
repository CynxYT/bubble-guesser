import React from "react";
import setHover from "../hooks/setHover";




export default function Cursor() {

    let height = window.innerHeight;
    let width = window.innerWidth;

    if (width > 1000) {
        document.onmousemove = (event) => {
            let docs = (document.querySelectorAll(".custom-cursor") as NodeListOf<HTMLElement>);
            let game = (document.querySelectorAll(".button-section, .guess-int") as NodeListOf<HTMLElement>);
    
            docs.forEach((x) => {
                x.style.transform = "translate(calc(" + event.pageX + "px - 5rem), calc(" + event.pageY + "px - 5rem))";
            });

            game.forEach((x) => {
                x.style.transform = "translate( " +  ((event.pageX - width/2) / 100) + "px, " + ((event.pageY - height/2) / 100) + "px)";
            }); 

            [1,2,3,4,5,6].forEach((x) => {
                (document.querySelector(".start-bubble-" + x) as HTMLElement).style.transform = "translate(" + ((event.pageX - width/2) / 50) * (x % 3 === 1 ? 0.5 : ((x - 1) % 3) / 1.5) + 
                                                                                                "px, " + ((event.pageY - height/2) / 50) * (x % 3 === 1 ? 0.5 : ((x - 1) % 3) / 1.5) + "px)";
            });
       }
    } 

    

    return(
        <div className="cursor-container">
            <div className="custom-cursor cursor-pointer"/>
            <div className="custom-cursor cursor-ring"/>
        </div>
    );
}