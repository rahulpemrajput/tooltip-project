// App.js
import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <h1>React Tooltip</h1>
      <Tooltip position="right" content="Thanks For Hovering! I'm a Tooltip">
      <div>Hover over me</div>
      </Tooltip>
    </div>
  );
}

export default App;
