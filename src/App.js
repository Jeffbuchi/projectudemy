import React from 'react';
import logo from './logo.svg';
import './App.css';

import FrontendPage from './frontend';
import BackendPage from './backend';
import YoutubePage from './videopage';

function App() {
  return (
    <div className="App">
     < FrontendPage/>
     < BackendPage/>
     < YoutubePage/>
    </div>
  );
}

export default App;
