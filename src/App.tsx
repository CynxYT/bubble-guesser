import { Router, Route, Switch } from "react-router-dom";
import history from './hooks/useHistory';
import './App.css';
import Home from './pages/home';
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import CheckScreenSize from "./functions/CheckScreenSize";
import { BubbleStateContext, bubbleStateDefaultValue} from "./context/BubbleStateContext";
import { useState } from "react";
import { BubbleTextStateContext, bubbleTextStateDefaultValue } from "./context/BubbleTextStateContext";


function App() {

  // ------------------- Context state values -------------------

  const [bubbleState, setBubbleState] = useState(bubbleStateDefaultValue.bubbleState);

  const [bubbleTextState, setBubbleTextState] = useState(bubbleTextStateDefaultValue.bubbleTextState);



  CheckScreenSize();

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

export default App;
