import { Router, Route, Switch } from "react-router-dom";
import history from './hooks/useHistory';
import './App.css';
import Home from './pages/Home';
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import CheckScreenSize from "./functions/CheckScreenSize";
import { BubbleStateContext, bubbleStateDefaultValue} from "./context/BubbleStateContext";
import { useState } from "react";
import { BubbleTextStateContext, bubbleTextStateDefaultValue } from "./context/BubbleTextStateContext";


export default function App() {

  // ---- Context States ----

  const [bubbleState, setBubbleState] = useState(bubbleStateDefaultValue.bubbleState); // stores all values for guesser game
  const [bubbleTextState, setBubbleTextState] = useState(bubbleTextStateDefaultValue.bubbleTextState); // stores text displayed on transition between game and start screen



  // ---- Check screen size ----

  CheckScreenSize(); // hacky solution... 



  // --------------------------------------------------------

  return (
      <>
        <Cursor/>
        <Preloader/>
        <Router history={history}>
            <Switch>
                <BubbleStateContext.Provider value={{ bubbleState, setBubbleState }}>
                  <BubbleTextStateContext.Provider value={{ bubbleTextState, setBubbleTextState}}>
                    <Route path="/" component={Home}/>
                  </BubbleTextStateContext.Provider>
                </BubbleStateContext.Provider>
            </Switch>
        </Router>
    </>
  );
}