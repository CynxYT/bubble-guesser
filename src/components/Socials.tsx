import React from "react";
import setHover from "../hooks/setHover";



export default function Socials() {

    return (
        <div className="socials-tab">
            <a className="social-container" href="https://www.twitter.com/im_cynx" rel="noreferrer" target="_blank"
                onMouseUp={() => {
                    setTimeout(() => {
                        setHover(false);
                    }, 400);
                }} 
                onMouseLeave={() => {
                    setHover(false);
                }}
                onMouseEnter={() => setHover(true)}>
                <div className="twitter-icon"/>
            </a>
            <a className="social-container" href="https://www.instagram.com/im_cynx" rel="noreferrer" target="_blank" 
                onMouseUp={() => {
                    setTimeout(() => {
                        setHover(false);
                    }, 400);
                }} 
                onMouseLeave={() => {
                    setHover(false);
                }}
                onMouseEnter={() => setHover(true)}>
                <div className="instagram-icon"/>
            </a>
            <a className="social-container" href="https://www.linkedin.com/in/cynx" rel="noreferrer" target="_blank" 
                onMouseUp={() => {
                    setTimeout(() => {
                        setHover(false);
                    }, 400);
                }} 
                onMouseLeave={() => {
                    setHover(false);
                }}
                onMouseEnter={() => setHover(true)}>
                <div className="linkedin-icon"/>
            </a>
            <a className="social-container" href="https://programming.cynx-productions.com" rel="noreferrer" target="_blank" 
                onMouseUp={() => {
                    setTimeout(() => {
                        setHover(false);
                    }, 400);
                }} 
                onMouseLeave={() => {
                    setHover(false);
                }}
                onMouseEnter={() => setHover(true)}>
                <div className="watermark-icon"/>
            </a>
        </div>
    );
}