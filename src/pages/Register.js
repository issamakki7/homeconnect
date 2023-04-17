import React from 'react';
import Form from '../components/Form/Form';
import '../components/Form/Form.css';
import Navbar from "../components/Navbar/Navbar";


function Register(){
    return(
        <div className = 'bg-register'>
        <Navbar/>
        <Form/>
        </div>
        )
    }

    export default Register;