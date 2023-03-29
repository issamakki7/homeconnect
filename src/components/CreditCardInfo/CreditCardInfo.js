import React from 'react';
import './CreditCardInfo.css';
import chip from '../video/chip.png';
import visa from '../video/visa.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CreditCardInfo(){

    const navigate = useNavigate();




    function handleCardNumberInput(e){
        document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
        let cardNum = document.querySelector('.card-number-input').value;
        if (isNaN(cardNum)){
            document.querySelector('.card-number-input').value = "";
            alert("Must input a number");
            return false;
        }

    }

    function handleCardHolderInput(e){
        document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;

    }

    function handleBidInput(e){
        let amount = document.querySelector('.bid-input').value;
        if (isNaN(amount)){
            document.querySelector('.bid-input').value = "";
            alert("Must input a number");
            return false;
        }
    }

    function handleMonthInput(e){
        document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value + "/";

    }

    function handleYearInput(e){
        document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;

    }

    function handleCVVMouseEnter(e){
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    }
    

    function handleCVVMouseLeave(e){
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    }


    function handleCVVInput(e){
        document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
        
        let cvvValue = document.querySelector('.cvv-input').value;
        if (isNaN(cvvValue)){
            document.querySelector('.cvv-input').value = "";
            alert("Must input a number");
            return false;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
      
        // Get all input elements
        const inputs = document.querySelectorAll('input, select');
        
        // Check if all inputs have a value
        let isValid = true;
        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
          }
        });
      
        // If all inputs have a value, submit the form
        if (isValid) {
          document.getElementById("creditForm").submit();
          alert('Bid successfully submitted');
        } else {
          alert('Please fill out all fields.');
        }
      }



    return(
        
<div className="container">

<div className="card-container">

    <div className="front">
        <div className="image">
            <img src= {chip} alt=""/> 
            <img src={visa} alt=""/>
        </div>
        <div className="card-number-box">################</div>
        <div className="flexbox">
            <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">full name</div>
            </div>
            <div className="box">
                <span>expires</span>
                <div className="expiration">
                    <span className="exp-month">mm/</span>
                    <span className="exp-year">yy</span>
                </div>
            </div>
        </div>
    </div>

    <div className="back">
        <div className="stripe"></div>
        <div className="box">
            <span>cvv</span>
            <div className="cvv-box"></div>
            <img src={visa} alt=""/>
        </div>
    </div>

</div>

<form id= "creditForm" onSubmit={handleSubmit} action="">
    <div className="inputBox">
        <span>Card Number</span>
        <input onChange={handleCardNumberInput} type="text" maxlength="16" className="card-number-input"/> 
    </div>
    <div className="inputBox">
        <span>Card Holder</span>
        <input onChange={handleCardHolderInput} type="text" className="card-holder-input"/>
    </div>

    <div className="inputBox">
        <span>Amount to Bid (in $)</span>
        <input onChange={handleBidInput} type="text" className="bid-input"/>
    </div>

    <div className="flexbox">
        <div className="inputBox">
            <span>expiration mm</span>
            <select onChange={handleMonthInput} name="" id="" className="month-input">
                <option value="month" selected disabled>month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </div>
        <div className="inputBox">
            <span>expiration yy</span>
            <select onChange={handleYearInput} name="" id="" className="year-input">
                <option value="year" selected disabled>year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
            </select>
        </div>
        <div className="inputBox">
            <span>cvv</span>
            <input onMouseEnter={handleCVVMouseEnter} onMouseLeave = {handleCVVMouseLeave} onChange = {handleCVVInput} type="text" maxlength="4" className="cvv-input"/>
        </div>
    </div>
    {/* <Link  to = "/homeconnect/#"> */}
            <button type='submit' className = "submit-btn">Submit</button>
            {/* </Link> */}
</form>

</div>    

        )
    }

    export default CreditCardInfo;