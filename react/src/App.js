import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav';
import { Routing } from './components/routing';
import { Provider } from 'react-redux';
import { store } from './redex/store';
import { useState } from 'react';


function App() {
  return (
    <div className="App">

      <Provider store={store}>

        <BrowserRouter>
          <Nav></Nav>
          <Routing></Routing>
        </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
