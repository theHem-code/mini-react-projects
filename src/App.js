import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ColorFlipper from "./components/ColorFlipper";
import Counter from "./components/Counter";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/colorflipper" component={ColorFlipper} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/reviews" component={Reviews} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
