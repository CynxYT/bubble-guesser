import React, { useEffect, useState } from "react";



export default function Preloader() {

    const [initial, setInitial] = useState(true);

    useEffect(() => {
        if (initial) return;

        setTimeout(() => {
            (document.querySelector(".preloader") as HTMLElement).style.display = "none";
        }, 4450);
    },[initial]);

    useEffect(() => {
        setInitial(false);
    },[]);

    return(
        <div className="preloader">
            <div className="preloader-ball"/>
            <div className="preloader-line"/>
        </div>
    );
}