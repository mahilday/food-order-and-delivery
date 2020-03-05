import React from 'react'
import './burger.css'
import {bool, func} from 'prop-types'


const Burger = ({open, setOpen}) => {
    return (
      <section className="burger" open={open} onClick={() => setOpen(!open)}>
        <div className=" mat rat" />
        <div className="mat tat" />
        <div className="mat bat"/>
      </section>
    )
  }
  Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Burger