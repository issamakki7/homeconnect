import React from 'react';
import './House.css';
// import icons
// import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import {Link} from 'react-router-dom';


function House(props){
  return (

    <div className='card-main'>
   <div className="card">
    <div className="card__body">
      <img src={props.img} class="card__image" />
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.description}</p>
    </div>
    <button className="card_btn"> <a className='website-link' href={props.website} >  View in Virtual Reality! </a></button>
    <a href= {props.maps} className="maps_btn"> View On Google Earth  <i className ="maps fas fa-map-marker"></i></a>
    <Link to = "/homeconnect/credit" className="maps_btn"> Make a Bid</Link>
    <button className="visit_btn"> <a className='website-link' href="" >  Request Visit</a></button>

  </div>

    </div>
 


  );
};

export default House;