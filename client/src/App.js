import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Engine from './components/Engine';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Engine} />
          {/* <Route path='/login' exact component={Engine} />
          <Route path='/signup' exact component={Engine} /> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
