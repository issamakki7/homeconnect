import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Studying from '../video/estate2.mp4';


function Hero(){
    return(
        <div className = "hero">
            <div className = "headerContainer">
                <video className = "vid" autoPlay loop muted>
                <source src = {Studying} type = "video/mp4"/>
                </video>
                <h1>Explore Your Future Home </h1>
                <p>Take a VR Tour or Build a Room</p>
                <a href='#browse' >
                <button className = "btn btn--primary">Explore Homes</button> 
                </a>
            </div>
        </div>
    )
}






export default Hero;