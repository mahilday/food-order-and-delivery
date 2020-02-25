import React from 'react';
import ReadyFood from './assets/ReadyFood.svg';
import menu from "./assets/menu.svg"
import Subtract from "./assets/Subtract.svg"
import svgimage from "./assets/svgimage.svg"
import './App.css';
import './css/animate.css'
import $ from 'jquery'

function App() {
setTimeout(function(){
    $('.rubberBand').removeClass('hidden')
  }, 500)

  return (
    <div className="App">
      <header>
      <nav className='navigation'>
      <div>
      <a><img className= 'animated rubberBand  hidden ' src ={ReadyFood} alt="logo"/></a>
      </div>
      <div>
      <a><img src ={menu} alt="menu"/></a>
      </div>
    </nav>
    <section className= 'animated slideInDown '>
    
    </section>
      </header>
   
    </div>
  );
}

export default App;
