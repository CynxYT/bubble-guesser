import { Router, Route, Switch } from "react-router-dom";
import history from './hooks/useHistory';
import './App.css';
import Home from './pages/home';
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";

function App() {

  return (
      <>
        <Cursor/>
        <Preloader/>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
