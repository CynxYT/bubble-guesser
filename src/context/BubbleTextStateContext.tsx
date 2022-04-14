import { createContext, Dispatch, SetStateAction } from "react";


type BubbleStateTextContextValue = { 
    bubbleTextState: string,
    setBubbleTextState: Dispatch<SetStateAction<string>>,
};

export const bubbleTextStateDefaultValue : BubbleStateTextContextValue = { 
    bubbleTextState: "let's get started!",
    setBubbleTextState: bubbleTextState => {},
};

export const BubbleTextStateContext = createContext(bubbleTextStateDefaultValue);