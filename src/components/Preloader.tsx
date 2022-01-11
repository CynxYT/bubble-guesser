import React, { useEffect, useState } from "react";



export default function Preloader() {

    const [initial, setInitial] = useState(true);

    useEffect(() => {
        if (initial) return;

        setTimeout(() => {
            (document.querySelector(".preloader") as HTMLElement).style.display = "none";
        }, 3000);
    },[initial]);

    useEffect(() => {
        setInitial(false);
    },[]);

    return(
        <div className="preloader">
            
        </div>
    );
}