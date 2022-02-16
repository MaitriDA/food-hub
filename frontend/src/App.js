import react from "react";
import Landing from "./components/Landing/Landing";
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Restraunt from "./components/Restraunt";
import Menu from "./components/Menu";
import Restraunts from "./components/Restraunts";
import Cart from "./components/Cart";
import UserLogin from "./components/Auth/UserLogin";
import UserRegister from "./components/Auth/UserRegister";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><Navbar/><Landing/></Route>
          <Route exact path="/res/:id"><Restraunt/></Route>
          <Route exact path="/res"><Restraunts/></Route>
          <Route exact path="/menu"><Menu/></Route>
          <Route exact path="/cart"><Cart/></Route>
          <Route exact path="/login"><UserLogin/></Route>
          <Route exact path="/register"><UserRegister/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
