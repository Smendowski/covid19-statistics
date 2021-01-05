import React from 'react';
import Map from "./components/Map.js"
import Home from "./components/Home.js"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact from="/global-map" render={props => <Map {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
