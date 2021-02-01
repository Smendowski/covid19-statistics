import React from 'react';
import Header from './components/Header.js'
import MapTotalCases from "./components/MapTotalCases.js"
import MapActiveCases from "./components/MapActiveCases.js"
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import Graphs from "./components/Graphs.js"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MapRecoveredCases from './components/MapRecoveredCases.js';
import MapDeathCases from './components/MapDeathCases.js';

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
          <Header />
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact from="/global-map-total-cases" render={props => <MapTotalCases {...props} />} />
            <Route exact from="/global-map-active-cases" render={props => <MapActiveCases {...props} />} />
            <Route exact from="/global-map-recovered" render={props => <MapRecoveredCases {...props} />} />
            <Route exact from="/global-map-death" render={props => <MapDeathCases {...props} />} />
            <Route exact from="/graphs" render={props => <Graphs {...props} />} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
