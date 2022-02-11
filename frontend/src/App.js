import react from "react";
import Landing from "./components/Landing/Landing";
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Restraunt from "./components/Restraunt";
import Menu from "./components/Menu";
import Restraunts from "./components/Restraunts";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Landing/></Route>
          <Route exact path="/res/:id"><Restraunt/></Route>
          <Route exact path="/res"><Restraunts/></Route>
          <Route exact path="/menu"><Menu/></Route>
          <Route exact path="/cart"><Cart/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
