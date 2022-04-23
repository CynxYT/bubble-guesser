import { useEffect, useRef, useState } from "react";
import useHover from "../hooks/useHover";

export default function Cursor() {

    type CursorRef = {
        mouseX: number,
        mouseY: number,
        destinationX: number,
        destinationY: number,
        distanceX: number,
        distanceY: number,
        key: number,
    }

    function isTouchDevice() {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    }

    const [isHover, setHover] = useState(false);
    const [initial, setInitial] = useState(true);
    const secondaryCursor = useRef<HTMLDivElement>(null);
    const mainCursor = useRef<HTMLDivElement>(null);
    const positionRef = useRef<CursorRef>({
      mouseX: 0,
      mouseY: 0,
      destinationX: 0,
      destinationY: 0,
      distanceX: 0,
      distanceY: 0,
      key: -1,
    });

    useEffect(() => {
        setTimeout(() => {
            setInitial(false);
        }, 100);
    }, []);

    useHover(isHover, initial);

    useEffect(() => {

        if (isTouchDevice() === true && window.innerWidth < 1400) {
            return;
        }

        onmousemove = (event) => {
            const { clientX, clientY } = event;
            let hoverItems = (document.querySelectorAll("button, .hover-item") as NodeListOf<HTMLElement>);
            (document.querySelector(".main-cursor") as HTMLElement).style.opacity = "1";
            (document.querySelector(".secondary-cursor") as HTMLElement).style.opacity = "1";

            const mouseX = clientX;
            const mouseY = clientY;
            if (secondaryCursor.current !== null && mainCursor.current !== null) {
                positionRef.current.mouseX = mouseX - (secondaryCursor.current).clientWidth / 2;
                positionRef.current.mouseY = mouseY - (secondaryCursor.current).clientHeight / 2;
                mainCursor.current.style.transform = `translate(${mouseX - (mainCursor.current).clientWidth / 2}px, ${mouseY - (mainCursor.current).clientHeight / 2}px)`;
            }


            // ----------------------------------------------------------

            hoverItems.forEach((x) => {
                x.onmouseover = () => {setHover(true);}
                x.onmouseout = () => {setHover(false);}
            });
    
        }

        return () => {};
        
    }, []);

    useEffect(() => {

        const followMouse = () => {            
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
              mouseX,
              mouseY,
              destinationX,
              destinationY,
              distanceX,
              distanceY,
            } = positionRef.current;

            if (!destinationX || !destinationY) {
              positionRef.current.destinationX = mouseX;
              positionRef.current.destinationY = mouseY;
            } else {
              positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
              positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

              if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
              } else {
                positionRef.current.destinationX += distanceX;
                positionRef.current.destinationY += distanceY;
              }
            }

            if (secondaryCursor.current !== null) (secondaryCursor.current).style.transform = `translate(${destinationX}px, calc(${destinationY}px)`;

        };

        followMouse();
    }, []);
    

    return(
        <div className={`cursor-wrapper`}>
            <div className="main-cursor" ref={mainCursor}>
                <div className="main-cursor-background"/>
            </div>
            <div className="secondary-cursor" ref={secondaryCursor}>
                <div className="secondary-cursor-background"/>
            </div>
        </div>
    );
}