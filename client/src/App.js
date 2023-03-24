import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Engine from './components/Engine'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Engine} />
            <Route path='/login' exact component={Engine} />
            <Route path='/signup' exact component={Engine} />
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default App;
