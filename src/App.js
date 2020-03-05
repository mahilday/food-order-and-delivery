import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './homepage.js'
import './App.css';
import './css/animate.css'


function App() {


  return (
    <div className="App">
     <Route exact path="/" render={()=>(
       <HomePage/>
     )}/>
   
    </div>
  );
}

export default App;
