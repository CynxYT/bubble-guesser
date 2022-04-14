import React from "react";
import { createContext, Dispatch, SetStateAction } from "react";

const MAX = 100;

type BubbleState = { 
    guess: number,
    min: number,
    max: number,
    counter: number 
};

type BubbleStateContextValue = {
    bubbleState: BubbleState,
    setBubbleState: Dispatch<SetStateAction<BubbleState>>;
};

export const bubbleStateDefaultValue : BubbleStateContextValue = { 
    bubbleState: {
        guess: Math.floor(Math.random() * MAX),
        min: 0,
        max: MAX,
        counter: 1,
    },
    setBubbleState: bubbleState => {},
};

export const BubbleStateContext = React.createContext(bubbleStateDefaultValue);