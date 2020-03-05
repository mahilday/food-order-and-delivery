import React from 'react'
import './mainsteps.css'
import quicktime from '../assets/quicktime.png'
import creditcard from '../assets/credit-card.png'
import eatMe from '../assets/eat-me.svg'

function MainStep(){
    const mainSteps=[
        {
            mainstepimg:eatMe,
            description:"Make a quick order,you get to choose the food of your choice"
        },
        {
            mainstepimg:creditcard,
            description:"pay using your preferred payment option and get a confirmation to show payment approval"
        },
        {
            mainstepimg:quicktime,
            description:"Get food delivered at your doorstep or pick it up from your preferred pick up station"
        },
        
    ]

    return(
        <div className ="mainsteps">

        <div className='head'>
          <h2><strong>Get your food in three easy steps</strong></h2>
        </div>
        <div className='imp'>
        {mainSteps.map(mainStep=> <div className='wrapperone'>
            <img src={mainStep.mainstepimg} alt= 'market'/>
            <p>{mainStep.description}</p>
            <button className="redstart">START</button>
            
        </div>
        )}
        </div>
        </div>
    )
}


export default MainStep