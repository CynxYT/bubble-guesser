import React from "react";


export default function BubbleCover(bubbleWords : string) {
    return (
        <div className="bubble-cover">
            <p className="bubble-cover-text">{bubbleWords}</p>
        </div>
    );
}