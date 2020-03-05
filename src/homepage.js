import React, {Component, useState } from 'react';
import { Link } from 'react-router-dom'
import logo from './assets/logo.svg';
import svgimage from "./assets/svgimage.svg"
import $ from 'jquery'
import Burger from './burger/burger';
import Menu from './menu/menu'
import MainStep from './mainsteps/mainsteps'


function HomePage(){
//    state={
//     menuchange: menu
        
//     }

const [open, setOpen] = useState(false);    
        setTimeout(function(){
            $('.rubberBand').removeClass('hidden')
          }, 500)

          $('Burger').click(
            
            function() {
                $('Menu.menu').css('display:block', 'transform:translateX(0%)');
                
            },
            function() {
                $('.menu').css('display:block', 'transform:translateX(0%)');
            }
    );
return(
        <div className= 'wrapper'>
            <header>
                <nav className='navigation'>
        <div className="logo">
        <Link to ="/"><img className="animated rubberBand " src={logo} alt="logo"/></Link>
        </div>
        <section className="svsection">
        <div className="svgpart">  
      
       <Burger className = 'animated rubberBand' open ={open} setOpen ={setOpen}/>
       </div>
      <div className="animated slideInRight navnew none">
          <Menu open ={open} setOpen ={setOpen}/>
         </div>
        </section>
      
    </nav>
    <section className= 'animated slideInDown centerpiece'>
    <div className='svgimg'>
        <img src = {svgimage} alt="decor"/>
    </div>
    <div className= 'writeup'>
        <h1 className ='animated fadeIn slow'><b>MAKE <span>ORDERS</span> THAT <span>COUNT</span> </b></h1>
        <p className='animated fadeIn slower'>Have food delivered at your doorstep without any hassle, quick and easy</p>
        <input type= 'button' className ='animated  tada delay-2s slower' name ='action' value= 'ORDER NOW'/>
    </div>
    </section>
      </header>

      <main>
          
          <div>
              <MainStep/>
          </div>
          
      </main>
            </div>
            
        )
        
    }
    
export default HomePage;