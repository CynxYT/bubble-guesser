import React from "react";




export default function Cursor() {

    document.onmousemove = (event) => {
        let docs = (document.querySelectorAll(".custom-cursor") as NodeListOf<HTMLElement>);

        docs.forEach((x) => {
            x.style.transform = "translate(calc(" + event.pageX + "px - 5rem), calc(" + event.pageY + "px - 5rem))";
        })
    } 

    return(
        <>
            <div className="custom-cursor cursor-pointer"/>
            <div className="custom-cursor cursor-ring"/>
        </>
    );
}