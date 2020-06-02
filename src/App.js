import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//COMPONENTS NEEDED
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeers from './components/RandomBeer';
import NewBeer from './components/NewBeer';

//CREATE ROUTES AND RESPECTIVE COMPONENTS TO BE RENDERED
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={AllBeers} />

        <Route path="/random-beer" component={RandomBeers} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
