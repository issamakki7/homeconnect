import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Browse from '../components/Browse/Browse';
import RoomBuilder from '../components/RoomBuilder/RoomBuilder';
import CreditCardInfo from '../components/CreditCardInfo/CreditCardInfo';

function Home(){
    return(
        <div>
        <Hero/>
        <Browse/>
        <RoomBuilder/>
       
        </div>
        )
    }

    export default Home;