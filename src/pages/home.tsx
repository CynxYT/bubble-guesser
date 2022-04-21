import { useContext, useEffect } from "react";
import BubbleCover from "../components/BubbleCover";
import Bubbles from "../components/Bubbles";
import ButtonTemplate from "../components/ButtonTemplate";
import GuessScreen from "../components/GuessScreen";
import InfoTab from "../components/InfoTab";
import Noise from "../components/Noise";
import Popup from "../components/Popup";
import Socials from "../components/Socials";
import StartBubble from "../components/StartBubble";
import { BubbleStateContext } from "../context/BubbleStateContext";
import { BubbleTextStateContext } from "../context/BubbleTextStateContext";

export default function Home() {

    const {bubbleState, setBubbleState} = useContext(BubbleStateContext);
    const {bubbleTextState, setBubbleTextState} = useContext(BubbleTextStateContext);


    return(
        <div className="home-container">

            {GuessScreen(bubbleState.guess)}

            <div className="button-section">
                <div className="button-inner-section lower-section">
                    {ButtonTemplate(2, bubbleState, setBubbleState, bubbleTextState, setBubbleTextState)}
                </div>

                <div className="button-inner-section red-section">
                    <div className="red-button-section">
                        {ButtonTemplate(3, bubbleState, setBubbleState, bubbleTextState, setBubbleTextState)}
                        {ButtonTemplate(4, bubbleState, setBubbleState, bubbleTextState, setBubbleTextState)}
                    </div>
                </div>

                <div className="button-inner-section higher-section">
                    {ButtonTemplate(1, bubbleState, setBubbleState, bubbleTextState, setBubbleTextState)}
                </div>
            </div>

            <InfoTab/>
           
            <div className="start-tab">
                <div className="start-button-container">
                    {ButtonTemplate(0, bubbleState, setBubbleState, bubbleTextState, setBubbleTextState)}
                </div>
                <Socials/>
                <StartBubble/>
            </div>
 
            <Bubbles/>
            <Noise/>
            {BubbleCover(bubbleTextState)}
            <div className="background"/>
            <Popup/>
        </div>
    );
}