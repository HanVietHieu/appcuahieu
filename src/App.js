import Topbar from "./components/Topbar";
import Game from './components/game/Game'
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/login/Register"
import Input from "./components/login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from './components/Menu';
import Create from './components/text/Create'
import Update from './components/text/Update'

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        
        <Route path="/" exact component={Topbar} />
        <Route path="/login" exact component={Input} />
        <Route path="/Register" exact component={Register} />
        <Route path="/game" exact component={Game} />
        <Route path="/create" exact component={Create} />
        <Route path="/Update" exact component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
