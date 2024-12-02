import React from 'react';
import logo from './logo.svg';
import './App.css';
import greet from './components/greet'
function App() {
  const data = ['title1', 'title2', 'title3'];
let cards = data.map((item) => <card>{item}</card>)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;